import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <ShopContext.Provider value={{
      cart, addToCart, removeFromCart, cartTotal, setCart,
      user, setUser,
      isCartOpen, setIsCartOpen,
      isAuthOpen, setIsAuthOpen,
      isPaymentOpen, setIsPaymentOpen
    }}>
      {children}
    </ShopContext.Provider>
  );
};