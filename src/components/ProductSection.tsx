"use client";

import { useState } from "react";

export default function ProductSection() {
  const [selectedSize, setSelectedSize] = useState('2g');

  const products = [
    {
      size: '1g',
      title: 'お試しサイズ',
      description: '1g - 約30日分',
      features: ['マザーベジタブル 1g配合', '約30日分', '携帯に便利なコンパクトケース'],
      originalPrice: '¥3,300',
      price: '¥2,200',
      popular: false
    },
    {
      size: '2g',
      title: 'スタンダードサイズ',
      description: '2g - 約60日分',
      features: ['マザーベジタブル 2g配合', '約60日分', '携帯に便利なコンパクトケース'],
      originalPrice: '¥5,500',
      price: '¥3,300',
      popular: true
    },
    {
      size: '5g',
      title: 'お得な大容量',
      description: '5g - 約150日分',
      features: ['マザーベジタブル 5g配合', '約150日分', '特別な大容量ラグジュアリーケース'],
      originalPrice: '¥8,800',
      price: '¥5,500',
      popular: false
    }
  ];

  const ingredient = {
    name: 'マザーベジタブル',
    description: '35億年前に誕生した地球最初の生命体',
    details: '独自の吸着機能により、24時間美しさを保ちます。'
  };

  const effects = [
    { title: '化粧崩れ防止効果', description: '汗やテカリをしっかり吸着し、崩れを防ぎます' },
    { title: '透明感のある陶器肌', description: '細かい粒子が肌を整え、美しい陶器肌を再現' },
    { title: 'トーンアップ効果', description: '肌を明るく見せ、自然な輝きを与えます' },
    { title: 'スキンケア効果', description: '肌を保護しながら美しく整えます' }
  ];

  return (
    <section id="product" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-[#b8860b] mb-4 tracking-wider">商品ラインナップ</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
            Mother Vegetables Confidence<br />
            MV-Si002 商品ラインナップ
          </h2>
          <div className="w-20 h-1 bg-[#b8860b] mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Product Size Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {products.map((product) => (
              <div
                key={product.size}
                className={`size-selector bg-white rounded-2xl p-6 md:p-8 ${product.popular ? 'pt-10 md:pt-12' : ''} border-2 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative group cursor-pointer ${
                  product.popular ? 'border-[#b8860b]' : 'border-[#b8860b]/20'
                } ${selectedSize === product.size ? 'ring-4 ring-[#b8860b] ring-opacity-50' : ''}`}
                onClick={() => setSelectedSize(product.size)}
              >
                {product.popular && (
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#b8860b] to-[#d4c4b0] text-black px-6 py-1 rounded-full text-sm font-bold z-20">
                    人気No.1
                  </div>
                )}
                
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #b8860b 0.5px, transparent 1px)', backgroundSize: '20px 20px'}} />
                </div>
                
                <div className="relative z-10">
                  <div className="product-image-container aspect-square rounded-2xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-4xl font-light text-[#b8860b] mb-2">{product.size}</p>
                        <p className="text-sm text-gray-400">Product Photo</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-light mb-2 text-gray-800">{product.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 text-xs md:text-sm text-gray-400 mb-6">
                    {product.features.map((feature, index) => (
                      <p key={index} className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-[#b8860b] rounded-full mr-2" />
                        {feature}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs md:text-sm text-gray-400 line-through mb-1">通常価格 {product.originalPrice}</p>
                    <p className={`text-2xl md:text-3xl font-light mb-1 ${product.popular ? 'text-[#b8860b]' : 'text-gray-800'}`}>
                      {product.price}
                    </p>
                    <p className="text-xs text-gray-400">(税込)</p>
                  </div>
                  
                  <button className={`w-full px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base transition-all duration-300 relative overflow-hidden group/btn ${
                    product.popular 
                      ? 'bg-gradient-to-r from-[#b8860b] to-[#d4c4b0] hover:from-[#d4c4b0] hover:to-[#b8860b] text-black' 
                      : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-200 text-gray-800'
                  }`}>
                    <span className="relative z-10">購入する</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b]/20 to-[#d4c4b0]/20 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Ingredients and Effects Section */}
          <div className="mt-20">
            <h3 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-center text-gray-800 tracking-wide">成分・効果</h3>
            
            {/* Main Ingredient - Featured Section */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 border border-[#b8860b]/30 shadow-xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#b8860b]/20 to-[#d4c4b0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#b8860b]">
                      <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-light text-[#b8860b] mb-2">主成分</h4>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-3">{ingredient.name}</p>
                  <p className="text-base text-gray-600 mb-4">{ingredient.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">{ingredient.details}</p>
                </div>
              </div>
            </div>
            
            {/* Effects Grid */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h4 className="text-lg md:text-xl font-light text-gray-800 mb-6 text-center">期待できる効果</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {effects.map((effect, index) => (
                  <div key={index} className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <span className="inline-block w-8 h-8 bg-gradient-to-br from-[#b8860b]/20 to-[#d4c4b0]/20 rounded-full flex-shrink-0 mt-0.5 mr-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#b8860b]">
                        <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M7,13L10,16L17,9L15.59,7.58L10,13.17L8.41,11.59L7,13Z"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-base font-medium text-[#b8860b] mb-1">{effect.title}</p>
                      <p className="text-sm text-gray-600">{effect.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}