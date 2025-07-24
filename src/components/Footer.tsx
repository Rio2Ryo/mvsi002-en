export default function Footer() {
  const links = [
    { label: "会社概要", href: "https://www.dotpb.jp/" }
  ];

  return (
    <footer className="py-16 md:py-20 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl text-[#b8860b] mb-4 font-light tracking-wider">
            Mother Vegetables Confidence
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">MV-Si002</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-600 mb-8 md:mb-12 text-sm">
            {links.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8860b] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mb-6 md:mb-8" />
          
          <p className="text-xs md:text-sm text-gray-500 font-light">
            © 2025 Mother Vegetables Confidence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}