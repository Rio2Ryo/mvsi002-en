"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductSection() {
  const [selectedSize, setSelectedSize] = useState("2g");
  const router = useRouter();
  const { itemId } = router.query;

  const allProducts  = [
    {
      size: "1g",
      slugPrefix: "trial",
      title: "お試しサイズ",
      description: "1g - 約30日分",
      features: ["マザーベジタブル 1g配合", "約30日分", "携帯に便利なコンパクトケース"],
      originalPrice: "¥3,300",
      price: "¥2,200",
      popular: false
    },
    {
      size: "2g",
      slugPrefix: "standard",
      title: "スタンダードサイズ",
      description: "2g - 約60日分",
      features: ["マザーベジタブル 2g配合", "約60日分", "携帯に便利なコンパクトケース"],
      originalPrice: "¥5,500",
      price: "¥3,300",
      popular: true
    },
    {
      size: "5g",
      slugPrefix: "large",
      title: "お得な大容量",
      description: "5g - 約150日分",
      features: ["マザーベジタブル 5g配合", "約150日分", "特別な大容量ラグジュアリーケース"],
      originalPrice: "¥8,800",
      price: "¥5,500",
      popular: false
    }
  ];

  const products = itemId
    ? allProducts.slice(-3).map((p) => ({
        ...p,
        slug: `${p.slugPrefix}-${itemId}`
      }))
    : [];

  return (
    <section id="product" style={{ padding: "5rem 0.01rem 1rem 0.01rem", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#b8860b", marginBottom: "1rem", letterSpacing: "0.1em" }}>商品ラインナップ</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2d2d2d", marginBottom: "2rem", lineHeight: "1.2" }}>
            Mother Vegetables Confidence<br />MV-Si002 商品ラインナップ
          </h2>
          <div style={{ width: "80px", height: "4px", backgroundColor: "#b8860b", margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
          {products.map((product) => (
            <div
              key={product.size}
              onClick={() => setSelectedSize(product.size)}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                padding: "2rem",
                border: selectedSize === product.size ? "3px solid #b8860b" : product.popular ? "2px solid #b8860b" : "2px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                cursor: "pointer",
                position: "relative",
                textAlign: "center"
              }}
            >
              {product.popular && (
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(to right, #b8860b, #d4c4b0)",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                  color: "#000",
                  zIndex: 2
                }}>
                  人気No.1
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                {product.size === "1g" && (
                  <img
                    src="/item_pic1.jpg"
                    alt="1g 商品画像"
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      backgroundColor: "#f3f4f6"
                    }}
                  />
                )}
                {product.size === "2g" && (
                  <img
                    src="/item_pic2.jpg"
                    alt="2g 商品画像"
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      backgroundColor: "#f3f4f6"
                    }}
                  />
                )}
                {product.size === "5g" && (
                  <img
                    src="/item_pic3.jpg"
                    alt="5g 商品画像"
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      backgroundColor: "#f3f4f6"
                    }}
                  />
                )}
              </div>

              <h3 style={{ fontSize: "1.25rem", fontWeight: "300", color: "#1f2937", marginBottom: "0.5rem" }}>{product.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1rem" }}>{product.description}</p>
              <div style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1.5rem" }}>
                {product.features.map((f, i) => (
                  <p key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "6px", height: "6px", backgroundColor: "#b8860b", borderRadius: "50%" }}></span>
                    {f}
                  </p>
                ))}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", textDecoration: "line-through", marginBottom: "0.25rem" }}>通常価格 {product.originalPrice}</p>
                <p className="price" style={{ fontSize: "2rem", fontWeight: "300", marginBottom: "0.25rem", color: product.popular ? "#b8860b" : "#1f2937" }}>{product.price}</p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>(税込)</p>
              </div>
              <Link href={`/item/${itemId}/${product.slug}`} style={{ textDecoration: "none" }}>
                <button style={{
                  width: "100%",
                  padding: "0.75rem 1.5rem",
                  background: product.popular ? "linear-gradient(to right, #b8860b, #d4c4b0)" : "#e5e7eb",
                  color: product.popular ? "#000" : "#1f2937",
                  border: "none",
                  borderRadius: "0",
                  fontSize: "0.875rem",
                  cursor: "pointer"
                }}>
                  購入する
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.45rem !important;
          }
          .price {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
