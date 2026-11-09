export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000')" }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-[#FDFBF7] px-4">
        <h2 className="text-5xl md:text-7xl font-serif font-light mb-4 drop-shadow-lg">Earth & Soul</h2>
        <p className="text-xl md:text-2xl font-serif italic mb-8 drop-shadow-md">The New Festive Collection</p>
        <button className="bg-[#E2725B] hover:bg-[#c9624d] text-white px-8 py-3 rounded-full font-serif text-lg transition-transform transform hover:scale-105">
          Shop the Ad
        </button>
      </div>
    </section>
  );
}