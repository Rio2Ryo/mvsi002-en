import React from "react";

export default function GuaranteeSection() {
  const guarantees = [
    { number: "01", label: "送料無料" },
    { number: "02", label: "安心の医薬部外品" },
    { number: "03", label: "専門スタッフサポート" }
  ];

  return (
    <>
      <section className="guarantee-section">
        <div className="guarantee-container">
          <div className="guarantee-box">
            <h2 className="guarantee-title">30日間返金保証</h2>
            <p className="guarantee-description">
              万が一、お肌に合わない場合は<br />
              商品到着後30日以内であれば全額返金いたします
            </p>

            <div className="guarantee-grid">
              {guarantees.map((item) => (
                <div key={item.number} className="guarantee-item">
                  <div className="guarantee-number-circle">
                    <span className="guarantee-number">{item.number}</span>
                  </div>
                  <p className="guarantee-label">{item.label}</p>
                </div>
              ))}
            </div>

            <button
  className="guarantee-button"
  onClick={() => {
    const element = document.getElementById("product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  安心して今すぐ試してみる
</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .guarantee-section {
          padding: 5rem 1rem 6rem;
          background: #000;
        }

        .guarantee-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .guarantee-box {
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(to bottom right, #1f1f1f, #000);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(184, 134, 11, 0.2);
        }

        .guarantee-title {
          font-size: 2rem;
          font-weight: 300;
          color: #b8860b;
          margin-bottom: 1.5rem;
        }

        .guarantee-description {
          font-size: 1rem;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .guarantee-title {
            font-size: 2.5rem;
          }

          .guarantee-description {
            font-size: 1.125rem;
          }
        }

        .guarantee-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .guarantee-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .guarantee-item {
          text-align: center;
        }

        .guarantee-number-circle {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.75rem;
          background: #000;
          border: 1px solid rgba(184, 134, 11, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .guarantee-number-circle {
            width: 56px;
            height: 56px;
          }
        }

        .guarantee-number {
          color: #b8860b;
          font-weight: 300;
          font-size: 1rem;
        }

        @media (min-width: 768px) {
          .guarantee-number {
            font-size: 1.125rem;
          }
        }

        .guarantee-label {
          font-size: 0.875rem;
          color: #ccc;
        }

        @media (min-width: 768px) {
          .guarantee-label {
            font-size: 1rem;
          }
        }

        .guarantee-button {
          background: linear-gradient(to right, #b8860b, #d4c4b0);
          color: white;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 0;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: background 0.3s ease;
        }

        .guarantee-button:hover {
          background: linear-gradient(to right, #d4c4b0, #b8860b);
        }

        @media (min-width: 768px) {
          .guarantee-button {
            padding: 1rem 3rem;
            font-size: 1.125rem;
          }
        }
      `}</style>
    </>
  );
}
