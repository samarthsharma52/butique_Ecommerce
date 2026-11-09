import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AuthView from './components/AuthModal';
import CartView from './components/CartDrawer';
import CheckoutView from './components/CheckoutView';
import SuccessModal from './components/SuccessModal';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const getCartTotal = () => cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const getCartCount = () => cart.reduce((count, item) => count + item.quantity, 0);

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleCheckoutSuccess = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setCart([]);
      navigateTo('home');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 selection:bg-[#e2725b] selection:text-white">
      {currentView !== 'login' && currentView !== 'signup' && (
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          navigateTo={navigateTo} 
          isLoggedIn={isLoggedIn} 
          getCartCount={getCartCount} 
          currentView={currentView}
        />
      )}
      
      <main>
        {currentView === 'home' && <HomeView addToCart={addToCart} />}
        {currentView === 'login' && <AuthView isLogin={true} setIsLoggedIn={setIsLoggedIn} navigateTo={navigateTo} />}
        {currentView === 'signup' && <AuthView isLogin={false} setIsLoggedIn={setIsLoggedIn} navigateTo={navigateTo} />}
        {currentView === 'cart' && <CartView cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} getCartTotal={getCartTotal} navigateTo={navigateTo} />}
        {currentView === 'checkout' && <CheckoutView getCartTotal={getCartTotal} handleCheckoutSuccess={handleCheckoutSuccess} />}
      </main>

      {showSuccessModal && <SuccessModal />}

      {currentView === 'home' && (
        <footer id="contact" className="bg-gray-900 text-[#fdfbf7] py-12 text-center scroll-mt-20">
          <h2 className="font-serif text-2xl mb-4">Hilo Studio</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">Embrace the rustic charm and earthy elegance with our handcrafted ethnic collections.</p>
          <div className="mb-8">
            <h3 className="font-serif text-xl mb-2">Contact Us: 91-9876543210</h3>
            <a href="mailto:hello@example.com?subject=Hilo%20Studio%20Inquiry" className="text-[#e2725b] hover:text-white transition-colors">
              Email us: abc@example.com
            </a>
          </div>
          <div className="text-gray-500 text-xs">© 2024 Hilo Studio. All rights reserved.</div>
        </footer>
      )}
    </div>
  );
}