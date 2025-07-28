"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 背景画像レイヤー */}
      <div className="absolute inset-0">
        {/* ベース背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black" />
        
        {/* 陶器肌のビジュアル表現 */}
        <div className="absolute inset-0">
          {/* 大きな円形グラデーション - 陶器の光沢 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-[#D4C4B0]/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 via-transparent to-[#D4C4B0]/10 rounded-full blur-2xl animate-pulse" />
          </div>
          
          {/* 陶器の表面テクスチャ */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `
              radial-gradient(ellipse 800px 400px at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 40%),
              radial-gradient(circle at 25% 50%, rgba(184, 134, 11, 0.15) 0%, transparent 35%),
              radial-gradient(circle at 75% 50%, rgba(212, 196, 176, 0.1) 0%, transparent 35%),
              linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)
            `,
          }} />
          
          {/* ハイライト効果 */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
        </div>
        
        {/* パウダーパーティクル効果 */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* キラキラエフェクト - パウダーの輝き */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 5;
            return (
              <div
                key={`sparkle-${i}`}
                className="absolute rounded-full bg-white"
                style={{
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
        
        {/* オーバーレイグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
      
      {/* コンテンツレイヤー */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインコンテンツ */}
          <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            {/* 製品バッジ */}
            <div className="inline-flex items-center justify-center">
              <div className="bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] p-[1px] rounded-full">
                <div className="bg-black px-6 py-2 rounded-full">
                  <p className="text-xs text-[#B8860B] tracking-[0.3em]">LUXURY FACE POWDER</p>
                </div>
              </div>
            </div>
            
            {/* メインタイトル */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white leading-tight">
              朝の<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4C4B0]">5秒</span>で、<br />
              <span className="font-normal">24時間の自信を。</span>
            </h1>
            
            {/* サブコピー */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              素肌への自信が、あなたの美しさを解放する。<br className="hidden sm:block" />
              35億年の生命力で、陶器のような美肌へ。
            </p>
            
            {/* 製品名 */}
            <div className="space-y-2">
              <p className="text-sm text-[#B8860B] tracking-wider">医薬部外品原料規格をクリア</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white tracking-wider">
                Mother Vegetables Confidence
              </h2>
              <p className="text-xl md:text-2xl text-[#D4C4B0]">MV-Si002</p>
            </div>
            
            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] transition-transform duration-300 group-hover:scale-110" />
                <span className="relative text-white text-sm tracking-wider font-medium">
                  購入する
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                詳細を見る
              </button>
            </div>
            
            {/* 特徴アイコン */}
            <div className="flex items-center justify-center gap-8 md:gap-12 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-400">朝5秒で完成</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-400">24時間キープ</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-400">医薬部外品</p>
              </div>
            </div>
          </div>
          
          {/* フローティング要素 */}
          <div className="absolute top-10 right-10 bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] text-white rounded-full px-4 py-2 text-xs font-medium shadow-xl transform rotate-12 hidden md:block">
            限定販売中
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター - 位置を調整 */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <p className="text-xs tracking-wider writing-mode-vertical">SCROLL</p>
          <div className="w-px h-8 bg-gray-400/50 relative overflow-hidden">
            <div className="absolute top-0 w-full h-2 bg-white/80 animate-bounce" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}