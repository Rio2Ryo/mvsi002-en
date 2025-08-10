import React from 'react';

function FeatureSection() {
  const features = [
    {
      title: "朝の5秒で完成",
      subtitle: "忙しい朝でも",
      description: "マザーベジタブルがワンタッチで均一に広がり、プロのメイクアップアーティストが仕上げたような陶器肌が瞬時に完成。",
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
    },
    {
      title: "24時間崩れない",
      subtitle: "夜まで美しく",
      description: "独自の密着技術により、汗や皮脂に強く、マスクをしても崩れない。朝の美しさが夜まで続きます。",
      svgPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 2.24L9.53 9.03l-5.47.8 3.96 3.86-.94 5.46L12 16.59l4.92 2.59-.94-5.46 3.96-3.86-5.47-.8L12 4.24z"
    },
    {
      title: "肌に優しい",
      subtitle: "医薬部外品原料規格をクリア",
      description: "医薬部外品原料規格をクリアしたオーガニック成分。地球最初の生命体である植物を使用し、敏感肌の方でも安心。",
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    }
  ];

  return (
    <>
      <section id="features" className="feature-section">
        <div className="container">
          <div className="header">
            <p className="label">FEATURES</p>
            <h2 className="title">なぜ、選ばれ続けるのか</h2>
            <div className="separator"></div>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-box">
                  <div className="icon-circle">
                    <svg viewBox="0 0 24 24" className="icon" fill="currentColor">
                      <path d={feature.svgPath} />
                    </svg>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-subtitle">{feature.subtitle}</p>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .feature-section {
          padding: 5rem 1rem 6rem;
          background-color: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .label {
          font-size: 0.875rem;
          color: #4B5563;
          margin-bottom: 1rem;
          letter-spacing: 0.2em;
        }

        .title {
          font-size: 2rem;
          font-weight: 300;
          color: #111827;
          margin-bottom: 1.5rem;
        }

        .separator {
          width: 5rem;
          height: 1px;
          background-color: #D4C4B0;
          margin: 0 auto;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .feature-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        .feature-item {
          transition: transform 0.3s ease;
        }

        .feature-box {
          background-color: white;
          padding: 1.5rem;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .feature-item:hover .feature-box {
          transform: scale(1.05);
        }

        .icon-circle {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem auto;
          border-radius: 50%;
          background: linear-gradient(to bottom right, #FAFAFA, #F0F0F0);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          width: 40px;
          height: 40px;
          color: #B8860B;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: #111827;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .feature-subtitle {
          font-size: 0.875rem;
          color: #6B7280;
          margin-bottom: 1rem;
          text-align: center;
        }

        .feature-description {
          font-size: 0.875rem;
          color: #4B5563;
          line-height: 1.6;
          text-align: center;
        }
        @media (max-width: 768px) {
          .title {
            font-size:1.4rem!important;
          }
        }
      `}</style>
    </>
  );
}

export default FeatureSection;
