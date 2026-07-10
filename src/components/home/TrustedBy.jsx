// TrustedBy component

const brands = [
  "Vogue", "Forbes", "The New York Times", "Goop", "Allure", "Cosmopolitan"
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest">
          Trusted by thousands and featured in
        </p>
      </div>
      
      {/* Infinite Slider */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span 
              key={index} 
              className="text-2xl font-serif font-bold text-text-secondary mx-8"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      
      {/* Required CSS for marquee in global CSS or here */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
