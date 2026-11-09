import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, navigateTo, isLoggedIn, getCartCount, currentView }) {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'categories', label: 'Categories' },
    { id: 'trending', label: 'Trending' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    // Agar hum cart ya login page par hain, toh pehle home par jao
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#e8e1d5] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#4a5d23] hover:text-[#e2725b]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#4a5d23]">Hilo Studio</h1>
          </div>

          {/* Desktop Navigation with Active State */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id && currentView === 'home' 
                    ? 'text-[#e2725b] border-b-2 border-[#e2725b]' 
                    : 'text-gray-600 hover:text-[#e2725b]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => { navigateTo(isLoggedIn ? 'profile' : 'login'); setActiveSection(''); }} className="text-[#4a5d23] hover:text-[#e2725b] transition-colors">
              <User size={24} />
            </button>
            <button onClick={() => { navigateTo('cart'); setActiveSection(''); }} className="text-[#4a5d23] hover:text-[#e2725b] transition-colors relative">
              <ShoppingBag size={24} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e2725b] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#fdfbf7] border-b border-[#e8e1d5]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                  activeSection === item.id && currentView === 'home' ? 'text-[#e2725b] bg-[#f5f0e6]' : 'text-gray-700 hover:text-[#e2725b] hover:bg-[#f5f0e6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}