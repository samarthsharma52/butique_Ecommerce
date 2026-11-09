import { ShoppingBag } from 'lucide-react';
import { CATEGORIES, FEATURED_PRODUCTS } from '../assets/mockData';

export default function HomeView({ addToCart }) {
  return (
    <div className="pb-20">
      <div id="home" className="relative h-[85vh] w-full bg-gray-900">
        {/* <img 
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=2000" 
          alt="Boho Ethnic Wear" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-serif text-5xl md:text-7xl text-[#fdfbf7] mb-6 tracking-wide drop-shadow-md">
            Earth & Soul
          </h2>
          <p className="text-lg md:text-xl text-[#fdfbf7] font-light mb-10 max-w-lg drop-shadow-sm">
            Discover our artisanal collection of modern ethnic wear. Crafted for comfort, designed for elegance.
          </p>
          <button 
            onClick={() => document.getElementById('trending').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#e2725b] hover:bg-[#c9614c] text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Collection
          </button>
        </div>
      </div>

{/* category */}

      <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
        <h3 className="font-serif text-3xl text-center text-[#4a5d23] mb-12">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-[#fdfbf7] font-serif text-xl p-6 w-full text-center tracking-wide">{cat.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="trending" className="bg-[#f5f0e6] py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl text-center text-[#4a5d23] mb-12">Trending Arrivals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e1d5] hover:shadow-lg transition-all group">
                <div className="relative h-96 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-[#fdfbf7] text-[#4a5d23] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-serif text-xl text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-[#e2725b] font-medium text-lg mb-6">₹{product.price.toLocaleString('en-IN')}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#4a5d23] hover:bg-[#38471a] text-[#fdfbf7] py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}