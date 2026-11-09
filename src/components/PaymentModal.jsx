import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { X, CheckCircle } from 'lucide-react';

export default function PaymentModal() {
  const { isPaymentOpen, setIsPaymentOpen, cartTotal, setCart } = useContext(ShopContext);
  const [status, setStatus] = useState('idle'); // idle, processing, success

  if (!isPaymentOpen) return null;

  const handlePayment = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      setCart([]); // Clear cart on success
      setTimeout(() => {
        setIsPaymentOpen(false);
        setStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => status === 'idle' && setIsPaymentOpen(false)}></div>
      
      <div className="relative bg-white p-8 rounded-3xl w-full max-w-sm shadow-2xl text-center">
        {status === 'idle' && (
          <>
            <button onClick={() => setIsPaymentOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-serif text-[#4A5D23] mb-4">Complete Payment</h3>
            <p className="text-gray-500 mb-6">Total Amount: <span className="font-bold text-[#E2725B] text-xl">₹{cartTotal}</span></p>
            <button 
              onClick={handlePayment}
              className="w-full bg-[#4A5D23] text-white py-3 rounded-xl font-medium hover:bg-[#3a4a1b] transition"
            >
              Pay Now
            </button>
          </>
        )}

        {status === 'processing' && (
          <div className="py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A5D23] mx-auto mb-4"></div>
            <p className="text-[#5A5A5A] font-serif">Processing your payment...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="py-10 animate-fade-in">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={56} />
            <h3 className="text-2xl font-serif text-[#4A5D23] mb-2">Payment Successful!</h3>
            <p className="text-gray-500">Thank you for shopping with us.</p>
          </div>
        )}
      </div>
    </div>
  );
}