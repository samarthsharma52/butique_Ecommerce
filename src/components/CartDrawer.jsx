import { ShoppingBag, Minus, Plus, X, ChevronRight } from 'lucide-react';

export default function CartView({ cart, updateQuantity, removeFromCart, getCartTotal, navigateTo }) {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl text-[#4a5d23] mb-10 text-center">Your Bag</h2>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#e8e1d5]">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h3 className="text-2xl font-serif text-gray-600 mb-4">Your bag is empty</h3>
          <p className="text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <button onClick={() => navigateTo('home')} className="bg-[#4a5d23] hover:bg-[#38471a] text-[#fdfbf7] px-8 py-3 rounded-full font-medium transition-colors">
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 space-y-6">
            {cart.map((item) => (
              <div key={item.product.id} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-2xl border border-[#e8e1d5] shadow-sm gap-6">
                <img src={item.product.image} alt={item.product.name} className="w-24 h-32 object-cover rounded-xl" />
                
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-serif text-lg text-gray-800">{item.product.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                  <p className="text-[#e2725b] font-medium">₹{item.product.price.toLocaleString('en-IN')}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-200 rounded-full px-3 py-1 bg-[#fdfbf7]">
                    <button onClick={() => updateQuantity(item.product.id, -1)} className="text-gray-500 hover:text-[#e2725b] disabled:opacity-50" disabled={item.quantity <= 1}>
                      <Minus size={16} />
                    </button>
                    <span className="mx-4 font-medium w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, 1)} className="text-gray-500 hover:text-[#4a5d23]">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-gray-400 hover:text-red-500 p-2">
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-3xl border border-[#e8e1d5] shadow-sm sticky top-28">
              <h3 className="font-serif text-2xl text-gray-800 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-serif text-xl text-gray-800">
                  <span>Total</span>
                  <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                onClick={() => navigateTo('checkout')}
                className="w-full bg-[#e2725b] hover:bg-[#c9614c] text-white py-4 rounded-xl font-medium transition-colors flex justify-center items-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}