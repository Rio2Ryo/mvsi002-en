"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NewProductSection() {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("2g");
  const { query } = useRouter();

  useEffect(() => {
  if (!query.itemId) return;

  async function fetchProducts() {
    const agentId = query.itemId.toLowerCase();

    try {
      const res = await fetch(`/${agentId}_products.json`);
      if (!res.ok) throw new Error("データ取得失敗");

      const data = await res.json();
      const formatted = data.map((item) => ({
        itemPic: item.ItemPic || "",
        size: item.size || "",
        title: item.name || "タイトル未設定",
        description: item.description || "",
        features: item.features || [],
        originalPrice: item.originalprice || item.originalPrice || "",
        price: item.price || "",
        popular: item.popular || false,
        slug: item.slug || "",
      }));

      // ✅ 上位7商品だけ表示
      setProducts(formatted.slice(0, 7));
    } catch (error) {
      console.error("商品データの取得に失敗しました:", error);
    }
  }

  fetchProducts();
}, [query.itemId]);

  return (
    <section style={{ padding: "0.5rem 0.01rem", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
       
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
          {products.map((product, index) => (
            <div
              key={index}
              
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                padding: "2rem",
                border: product.popular ? "2px solid #b8860b" : "2px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                cursor: "pointer",
                position: "relative",
                textAlign: "center",
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
                  zIndex: 2,
                }}>人気No.1</div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <img
                  src={product.itemPic || "/default.jpg"}
                  alt={`${product.size} 商品画像`}
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    backgroundColor: "#f3f4f6",
                  }}
                />
              </div>

              <h3 style={{ fontSize: "0.9rem", fontWeight: "300", color: "#1f2937", marginBottom: "0.5rem" }}>{product.title}</h3>
              {/*<p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1rem" }}>{product.description}</p>*/}
              <div style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1.5rem" }}>
                {product.features.map((f, i) => (
                  <p key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "6px", height: "6px", backgroundColor: "#b8860b", borderRadius: "50%" }}></span>
                    {f}
                  </p>
                ))}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.75rem", color: "#6b7280", textDecoration: "line-through", marginBottom: "0.25rem" }}>
                  通常価格 {product.originalPrice}
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "300", marginBottom: "0.25rem", color: product.popular ? "#b8860b" : "#1f2937" }}>
                  {product.price}
                </p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>(税込)</p>
              </div>
              <Link href={`/item/${query.itemId}/${product.slug}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    background: product.popular ? "linear-gradient(to right, #b8860b, #d4c4b0)" : "#e5e7eb",
                    color: product.popular ? "#000" : "#1f2937",
                    border: "none",
                    borderRadius: "0",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                  }}
                >
                  購入する
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
