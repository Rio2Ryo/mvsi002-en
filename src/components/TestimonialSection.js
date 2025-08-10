import React, { useState } from "react";

export default function TestimonialSection() {
  const [modalImage, setModalImage] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "50代女性 3週間使用",
      comment: "年齢を重ねるにつれ、頬のシミや目元のクマがメイクでも隠しきれず、肌に自信を持てなくなっていました。そんなときにマザーベジタブルに出会いました。使い始めて3週間ほどで、肌の印象が見違えるように変わりました。特に気になっていた頬のシミがふんわりとカバーされるだけでなく、徐々に薄くなってきたように感じています。目元のクマやくすみもやわらぎ、肌全体が明るく均一に整ってきました。大人の肌にも無理なく使えます。"
    },
    {
      id: 2,
      name: "20代女性 1ヶ月使用",
      comment: "マザーベジタブルを使い始めてから、肌の調子が本当に変わりました。あれだけ気になっていた頬の毛穴がキュッと引き締まり、赤みや小さなブツブツも落ち着いてきました。肌全体がなめらかに整いますし、仕上がりも自然で、素肌そのものがキレイになったように見えるのが嬉しかったです。朝のメイクが長時間キープできて、化粧直しの回数もぐっと減りました。メイクとスキンケアを同時に叶えてくれる頼れるアイテムとして、毎日の必需品になっています。"
    },
    {
      id: 3,
      name: "80代女性 1ヶ月使用",
      comment: "若い頃から外に出ることが多かったせいか、いつの間にか腕にシミや痣が沢山できてしまい、年齢を感じるたびに少し気になっていました。もう仕方ないと諦めていましたが、娘にすすめられてこちらを使い始めました。使い始めてしばらくすると、濃かったシミと痣が少しずつ薄くなってきて、肌の色も以前より均一になってきたように思います。ごわついていた腕も、なめらかになった気がします。年を重ねてもきちんとお手入れをしてあげれば、肌は応えてくれるものなんですね。"
    }
  ];

  const surveyResults = [
    { label: "化粧崩れが減った", percentage: 98 },
    { label: "肌の調子が良くなった", percentage: 95 },
    { label: "陶器肌になれた", percentage: 97 },
    { label: "リピートしたい", percentage: 99 }
  ];

  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="header">
            <p className="section-label">お客様の声</p>
            <h2 className="section-title">実際にご使用いただいた<br />お客様の喜びの声</h2>
            <div className="section-separator" />
          </div>

          <div className="card-grid">
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card">
                <h4 className="card-label">使用前</h4>
                <div className="image-box" onClick={() => setModalImage(`before${t.id}`)}>
                  <img
                    src={`/before${t.id}.jpg`}
                    alt={`Before Photo ${t.id}`}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "1rem"
                    }}
                  />
                  <div className="badge">Before</div>
                </div>

                <h4 className="card-label">使用後</h4>
                <div className="image-box after" onClick={() => setModalImage(`after${t.id}`)}>
                  <img
                    src={`/after${t.id}.jpg`}
                    alt={`After Photo ${t.id}`}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "1rem"
                    }}
                  />
                  <div className="badge after">After</div>
                </div>
                    <p className="name">{t.name}</p>
                <p className="comment">{t.comment}</p>
                
              </div>
            ))}
          </div>

          <div className="survey-box">
            <h3 className="survey-title">ご愛用者様アンケート結果</h3>
            <div className="survey-grid">
              {surveyResults.map((r, i) => (
                <div key={i}>
                  <div className="survey-bar-header">
                    <span>{r.label}</span>
                    <span className="highlight">{r.percentage}%</span>
                  </div>
                  <div className="survey-bar-bg">
                    <div className="survey-bar-fill" style={{ width: `${r.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="note">※2024年10月実施 n=500</p>
          </div>
        </div>
      </section>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <button className="modal-close">×</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/${modalImage}.jpg`}
              alt={`拡大画像 ${modalImage}`}
              style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "1rem" }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .testimonial-section {
          padding: 5rem 1rem 6rem;
          background: #f9fafb;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-label {
          color: #b8860b;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: 2rem;
          color: #2d2d2d;
          margin-bottom: 1.5rem;
        }
        .section-separator {
          width: 80px;
          height: 4px;
          background: #b8860b;
          margin: 0 auto;
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
       .card-label {
  color: #b8860b;
  margin-bottom: 0.5rem;
  font-weight: 300;
  text-align: left; /* 👈 追加 */
}
        .image-box {
          
          border-radius: 1rem;
          padding: 0;
          margin-bottom: 1.5rem;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }
        
       
        .badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(255,255,255,0.9);
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #b8860b;
        }
        .badge.after {
          background: linear-gradient(to right, #b8860b, #d4c4b0);
          color: #000;
        }

        .comment {
          font-size: 0.95rem;
          color: #333;
          margin: 1rem 0;
          line-height: 1.6;
          text-align:left!important;
        }
        .name {
          font-size: 1.1rem;
          color: #b8860b;
        }

        .survey-box {
          background: white;
          padding: 2rem;
          border-radius: 1.5rem;
          margin-top: 4rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }
        .survey-title {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #2d2d2d;
        }
        .survey-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
         @media (max-width: 768px) {
          h2 {
          font-size: 1.4rem !important;
          line-height: 1.3 !important;
           }
        }
        @media (min-width: 768px) {
          .survey-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .survey-bar-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.3rem;
          font-size: 0.9rem;
          color: #444;
        }
        .highlight {
          font-weight: bold;
          color: #b8860b;
        }
        .survey-bar-bg {
          background: #ddd;
          border-radius: 999px;
          height: 12px;
          overflow: hidden;
        }
        .survey-bar-fill {
          background: linear-gradient(to right, #b8860b, #d4c4b0);
          height: 100%;
          transition: width 1s ease;
        }
        .note {
          font-size: 0.75rem;
          text-align: center;
          color: #888;
          margin-top: 1rem;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 2rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }
        .modal-content {
          background: #f0f0f0;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content img {
          width: 100%;
          height: auto;
          border-radius: 1rem;
        }
      `}</style>
    </>
  );
}
