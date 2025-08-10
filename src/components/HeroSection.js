"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="limitedBadge" style={styles.limitedBadge}>限定販売中</div>
      <section style={styles.section}>
        {/* 背景 */}
        <div style={styles.backgroundContainer}>
          <div style={styles.baseBackground} />
          <div style={styles.visualLayer}>
            <div style={styles.glowCircleOuter}>
              <div style={styles.glowCircleInner1} />
              <div style={styles.glowCircleInner2} />
            </div>
            <div style={styles.textureOverlay} />
            <div style={styles.highlightOverlay} />
          </div>
          <div style={styles.particles}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.particle,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
          <div style={styles.sparkles}>
            {[...Array(20)].map((_, i) => {
              const size = Math.random() * 3 + 1;
              const duration = Math.random() * 3 + 2;
              const delay = Math.random() * 5;
              return (
                <div
                  key={i}
                  style={{
                    ...styles.sparkle,
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `sparkle ${duration}s ${delay}s ease-in-out infinite`,
                  }}
                />
              );
            })}
          </div>
          <div style={styles.overlay} />
        </div>

        {/* コンテンツ */}
        <div style={styles.contentWrapper}>
          <div style={styles.content}>
            <div
              style={{
                ...styles.contentInner,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <div style={styles.badgeWrapper}>
                <div style={styles.badgeGradient}>
                  <div style={styles.badgeInner}>
                    <p style={styles.badgeText}>LUXURY FACE POWDER</p>
                  </div>
                </div>
              </div>
              <h1 style={styles.heading}>
                朝の<span style={styles.highlight}>5秒</span>で、<br />
                <span style={{ fontWeight: 400 }}>24時間の自信を。</span>
              </h1>
              <p style={styles.subCopy}>
                素肌への自信が、あなたの美しさを解放する。<br />
                35億年の生命力で、陶器のような美肌へ。
              </p>
              <div style={styles.productInfo}>
                <p style={styles.label}>医薬部外品原料規格をクリア</p>
                <h2 style={styles.productName}>Mother Vegetables Confidence</h2>
                <p style={styles.productCode}>MV-Si002</p>
              </div>
              <div className="ctaContainer" style={styles.ctaContainer}>
                <button
                  onClick={() =>
                    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={styles.ctaButton}
                >
                  <span style={styles.ctaText}>購入する</span>
                </button>
                <button
                  onClick={() =>
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={styles.secondaryButton}
                >
                  詳細を見る
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', marginTop: '32px' }}>
                <div style={styles.iconBlock}>
                  <div style={styles.iconCircle}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32} style={{ color: "#B8860B" }}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <p style={styles.iconText}>朝5秒で完成</p>
                </div>
                <div style={styles.iconBlock}>
                  <div style={styles.iconCircle}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32} style={{ color: "#B8860B" }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p style={styles.iconText}>24時間キープ</p>
                </div>
                <div style={styles.iconBlock}>
                  <div style={styles.iconCircle}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32} style={{ color: "#B8860B" }}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p style={styles.iconText}>医薬部外品</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.scrollIndicator}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "#bbb" }}>
            <p style={{ writingMode: "vertical-rl", fontSize: "12px", letterSpacing: "2px" }}>SCROLL</p>
            <div style={styles.scrollLine}>
              <div style={styles.scrollDot} />
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10%, 90% { opacity: 0.1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(100%); }
          }
           /* ✅ モバイル用フォントサイズ調整 */
          @media (max-width: 768px) {
           h1 {
          font-size: 2.2rem !important;
          line-height: 1.3!important;
            }
             h2 {
          font-size: 1.3rem !important;
          line-height: 1.3!important;
            }
             :global(.limitedBadge) {
      display: none !important;
    }
           :global(.ctaContainer) {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }

    :global(.ctaContainer > button) {
      width: 100% !important;
    }
          }
        `}</style>
      </section>
    </>
  );
}

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  backgroundContainer: { position: "absolute", inset: 0, zIndex: 1 },
  baseBackground: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom right, #1a1a1a, #0a0a0a, black)",
  },
  visualLayer: { position: "absolute", inset: 0 },
  glowCircleOuter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "800px",
  },
  glowCircleInner1: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(212,196,176,0.3), transparent)",
    filter: "blur(48px)",
  },
  glowCircleInner2: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background: "linear-gradient(to bottom right, rgba(184,134,11,0.2), transparent, rgba(212,196,176,0.1))",
    filter: "blur(32px)",
    animation: "pulse 3s infinite",
  },
  textureOverlay: {
    position: "absolute",
    inset: 0,
    opacity: 0.4,
    backgroundImage: `
      radial-gradient(ellipse 800px 400px at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 40%),
      radial-gradient(circle at 25% 50%, rgba(184, 134, 11, 0.15) 0%, transparent 35%),
      radial-gradient(circle at 75% 50%, rgba(212, 196, 176, 0.1) 0%, transparent 35%),
      linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)
    `,
  },
  highlightOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
  },
  particles: { position: "absolute", inset: 0 },
  particle: {
    position: "absolute",
    borderRadius: "50%",
    background: "white",
    opacity: 0.1,
  },
  sparkles: { position: "absolute", inset: 0 },
  sparkle: {
    position: "absolute",
    borderRadius: "50%",
    background: "white",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
    zIndex: 2,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 3,
    minHeight: "100vh",
    padding: "5rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: { maxWidth: "64rem", margin: "0 auto", textAlign: "center" },
  contentInner: {
    transition: "all 1s ease",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  badgeWrapper: { display: "inline-flex", justifyContent: "center" },
  badgeGradient: {
    background: "linear-gradient(to right, #B8860B, #D4C4B0)",
    padding: "1px",
    borderRadius: "9999px",
  },
  badgeInner: {
    background: "#000",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
  },
  badgeText: {
    fontSize: "0.75rem",
    color: "#B8860B",
    letterSpacing: "0.3em",
  },
  heading: {
    fontSize: "4rem",
    color: "#fff",
    fontWeight: 300,
    lineHeight: 1.0,
  },
  highlight: {
    color: "transparent",
    backgroundImage: "linear-gradient(to right, #B8860B, #D4C4B0)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  },
  subCopy: {
    fontSize: "1.125rem",
    color: "#ccc",
    lineHeight: 1.3,
    maxWidth: "40rem",
    margin: "0 auto",
  },
  productInfo: { display: "flex", flexDirection: "column", gap: "0.1rem" },
  label: {
    fontSize: "0.875rem",
    color: "#B8860B",
    letterSpacing: "0.1em",
  },
  productName: {
    fontSize: "2rem",
    color: "#fff",
    fontWeight: 300,
    letterSpacing: "0.1em",
  },
  productCode: { fontSize: "1.25rem", color: "#D4C4B0" },
  ctaContainer: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1rem",
  },
  ctaButton: {
    position: "relative",
    padding: "1rem 2rem",
    background: "linear-gradient(to right, #B8860B, #D4C4B0)",
    color: "#fff",
    fontWeight: "500",
    fontSize: "0.875rem",
    letterSpacing: "0.1em",
    overflow: "hidden",
    cursor: "pointer",
  },
  ctaText: { position: "relative", zIndex: 1 },
  secondaryButton: {
    padding: "1rem 2rem",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    backdropFilter: "blur(4px)",
    fontSize: "0.875rem",
    letterSpacing: "0.1em",
    cursor: "pointer",
  },
  iconBlock: { textAlign: "center" },
  iconCircle: {
    width: "64px",
    height: "64px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "9999px",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 0.75rem",
  },
  iconText: { fontSize: "0.75rem", color: "#aaa" },
  limitedBadge: {
    position: "absolute",
    top: "2.25rem",
    right: "2.25rem",
    background: "linear-gradient(to right, #B8860B, #D4C4B0)",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: 500,
    transform: "rotate(12deg)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    zIndex: 9999,
  },
  scrollIndicator: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 20,
  },
  scrollLine: {
    width: "1px",
    height: "2rem",
    background: "rgba(180,180,180,0.5)",
    position: "relative",
    overflow: "hidden",
  },
  scrollDot: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "0.5rem",
    background: "rgba(255,255,255,0.8)",
    animation: "bounce 2s infinite",
  },
};
