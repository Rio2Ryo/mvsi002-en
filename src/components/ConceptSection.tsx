export default function ConceptSection() {
  return (
    <section className="py-20 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-[0.2em]">CONCEPT</p>
            <h2 className="text-2xl md:text-4xl font-thin text-gray-900 mb-6">
              35億年前から続く、<br />
              <span className="text-gold-gradient">生命の力</span>を肌へ
            </h2>
            <div className="w-20 h-[1px] bg-[#D4C4B0] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mother Vegetables Confidence MV-Si002は、
                35億年前に誕生した地球最初の生命体を再現しました。
                私たちはそれを「マザーベジタブル」と呼んでいます。
              </p>
              <p className="text-gray-600 leading-relaxed">
                地球最初の生命の神秘をご自身の肌で感じてほしい。
                優れた密着力で日中の汗やベタつきを抑え、
                一日中サラサラで美しい肌を保ちます。
              </p>
              <p className="text-gray-600 leading-relaxed">
                医薬部外品原料規格をクリアした、
                肌に安心・安全なオーガニック成分。
                朝の5秒で、透明感のある陶器肌へ。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}