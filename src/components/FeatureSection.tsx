export default function FeatureSection() {
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
    <section id="features" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-[0.2em]">FEATURES</p>
            <h2 className="text-2xl md:text-4xl font-thin text-gray-900 mb-6">
              なぜ、選ばれ続けるのか
            </h2>
            <div className="w-20 h-[1px] bg-[#D4C4B0] mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 md:p-8 h-full luxury-shadow transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0] flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-10 h-10 text-[#B8860B]"
                      fill="currentColor"
                    >
                      <path d={feature.svgPath} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}