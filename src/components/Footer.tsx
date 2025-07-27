export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl text-[#b8860b] mb-4 font-light tracking-wider">
            Mother Vegetables Confidence
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8">MV-Si002</p>
          
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-2">dotpb株式会社</p>
            <p className="text-sm text-gray-600">〒103-0026</p>
            <p className="text-sm text-gray-600 mb-2">東京都中央区日本橋兜町5-1 兜町第1平和ビル3階</p>
            <a href="mailto:info@dotpb.jp" className="text-sm text-[#b8860b] hover:underline">
              info@dotpb.jp
            </a>
          </div>
          
          <div className="mb-8">
            <a 
              href="https://www.dotpb.jp/specified-commercial-transactions-act" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#b8860b] transition-colors"
            >
              特定商取引に基づく表記
            </a>
          </div>
          
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mb-6 md:mb-8" />
          
          <p className="text-xs md:text-sm text-gray-500 font-light">
            Copyright © 2025 dotpb Co.,Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}