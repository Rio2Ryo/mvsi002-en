"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";

import testIds from "../utils/test-ids";
import { CLIENT_ID } from "../constants/constants"; // ← src/app から1つ上がって constants
// import styles from "../styles/app.module.css"; // 使っていないので一旦外しています（必要なら正しい場所に置いて復帰）

import { useAsyncHandler } from "../hooks/async-handler";
import { useClient } from "../providers/client-provider";
import { useModal } from "../providers/modal-provider";

import HeroSection from "../components/HeroSection";
import ConceptSection from "../components/ConceptSection";
import FeatureSection from "../components/FeatureSection";
import TestimonialSection from "../components/TestimonialSection";
import ProductSection from "../components/ProductSection";
import Effects from "../components/Effects";
import GuaranteeSection from "../components/GuaranteeSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

// Cookie が無い場合 JSON.parse で落ちないように防御
const sessionStr = Cookies.get("session");

const myWixClient = createClient({
  modules: { products, currentCart, redirects },
  // クライアント側で使う環境変数は NEXT_PUBLIC_ プレフィックス推奨
  siteId: process.env.NEXT_PUBLIC_WIX_SITE_ID,
  auth: OAuthStrategy({
    clientId: CLIENT_ID,
    tokens: sessionStr ? JSON.parse(sessionStr) : undefined,
  }),
});

export default function Home() {
  const [productList, setProductList] = useState<any[]>([]);
  const [cart, setCart] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const handleAsync = useAsyncHandler();
  const { msid } = useClient();
  const { openModal } = useModal();

  async function fetchProducts() {
    setIsLoading(true);
    try {
      await handleAsync(async () => {
        const productList = await myWixClient.products.queryProducts().find();
        setProductList(productList.items);
      });
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchCart() {
    try {
      await handleAsync(async () =>
        setCart(await myWixClient.currentCart.getCurrentCart())
      );
    } catch {}
  }

  async function addToCart(product: any) {
    await handleAsync(async () => {
      const options = (product.productOptions ?? []).reduce(
        (selected: any, option: any) => ({
          ...selected,
          [option.name]: option.choices[0].description,
        }),
        {}
      );

      if (cart) {
        const existingProduct = cart?.lineItems?.find(
          (item: any) => item.catalogReference.catalogItemId === product._id
        );
        if (existingProduct) {
          return addExistingProduct(
            existingProduct._id,
            existingProduct.quantity + 1
          );
        }
      }

      const { cart: returnedCard } =
        await myWixClient.currentCart.addToCurrentCart({
          lineItems: [
            {
              catalogReference: {
                appId: "1380b703-ce81-ff05-f115-39571d94dfcd",
                catalogItemId: product._id,
                options: { options },
              },
              quantity: 1,
            },
          ],
        });
      setCart(returnedCard);
    });
  }

  async function clearCart() {
    await handleAsync(async () => {
      await myWixClient.currentCart.deleteCurrentCart();
      setCart({});
    });
  }

  async function createRedirect() {
    try {
      await handleAsync(async () => {
        const { checkoutId } =
          await myWixClient.currentCart.createCheckoutFromCurrentCart({
            channelType: currentCart.ChannelType.WEB,
          });

        const redirectSession =
          await myWixClient.redirects.createRedirectSession({
            ecomCheckout: { checkoutId },
            callbacks: { postFlowUrl: window.location.href },
          });

        // TS 的にも安全: href に代入
        window.location.href = redirectSession.redirectSession.fullUrl;
      });
    } catch (error) {
      openModal("premium", {
        primaryAction: () => {
          window.open(
            `https://manage.wix.com/premium-purchase-plan/dynamo?siteGuid=${msid || ""}`,
            "_blank"
          );
        },
      });
    }
  }

  async function addExistingProduct(lineItemId: string, quantity: number) {
    const { cart } =
      await myWixClient.currentCart.updateCurrentCartLineItemQuantity([
        { _id: lineItemId, quantity },
      ]);
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      {/* タイトルは app/layout.tsx の export const metadata で設定してください */}
      <main
        data-testid={testIds.COMMERCE_PAGE.CONTAINER}
        className="relative min-h-screen"
      >
        <HeroSection />
        <ConceptSection />
        <FeatureSection />
        <TestimonialSection />
        <ProductSection />
        <Effects />
        <GuaranteeSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
