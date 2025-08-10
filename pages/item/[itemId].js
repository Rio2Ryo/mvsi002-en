import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head"; // ✅ 追加

import HeroSection from "../../src/components/HeroSection";
import ConceptSection from "../../src/components/ConceptSection";
import FeatureSection from "../../src/components/FeatureSection";
import TestimonialSection from "../../src/components/TestimonialSection";
import ProductSection_2 from "../../src/components/ProductSection_2";
import NewProductSection from "../../src/components/NewProductSection";
import Effects from "../../src/components/Effects";
import GuaranteeSection from "../../src/components/GuaranteeSection";
import FAQSection from "../../src/components/FAQSection";
import Footer from "../../src/components/Footer";

export default function AgentItemPage() {
  const { query } = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query.itemId) return;

    async function fetchProducts() {
      const agentId = query.itemId.toLowerCase();

      try {
        const res = await fetch(`/${agentId}_products.json`);
        if (!res.ok) throw new Error("データ取得失敗");

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("商品データの取得に失敗しました:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [query.itemId]);

  return (
    <div>
      <Head>
        <title>Mother Vegetables Confidence MV-Si002 | 24時間崩れない陶器肌へ</title>
      </Head>

      <HeroSection />
      <ConceptSection />
      <FeatureSection />
      <TestimonialSection />
      <ProductSection_2 />
      <NewProductSection />
      <Effects />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
