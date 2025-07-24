export default function FAQSection() {
  const faqs = [
    {
      question: "敏感肌でも使えますか？",
      answer: "はい、医薬部外品原料規格をクリアした安全な処方です。敏感肌の方でも安心してお使いいただけます。"
    },
    {
      question: "いつ使えばいいですか？",
      answer: "スキンケアの後、メイクの仕上げまで、どのタイミングでもお使いいただけます。下地の上からでも、ファンデーションの後でも、お好みのタイミングでご使用ください。"
    },
    {
      question: "どのくらい持ちますか？",
      answer: "1日1回の使用で、1gは約30日、2gは約60日、5gは約150日ご使用いただけます。"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm text-[#b8860b] mb-4 tracking-wider">よくあるご質問</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              よくあるご質問
            </h2>
            <div className="w-20 h-1 bg-[#b8860b] mx-auto" />
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 md:pb-6">
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-[#b8860b]">Q. {faq.question}</h3>
                <p className="text-sm md:text-base text-gray-600">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}