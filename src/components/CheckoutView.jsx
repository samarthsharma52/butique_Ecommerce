import { CreditCard } from 'lucide-react';

export default function CheckoutView({ getCartTotal, handleCheckoutSuccess }) {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl text-[#4a5d23] mb-10 text-center">Secure Checkout</h2>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#e8e1d5]">
        <div className="mb-10">
          <h3 className="font-serif text-2xl text-gray-800 mb-6 border-b pb-4">1. Shipping Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4a5d23] outline-none bg-[#fdfbf7]" placeholder="Aisha" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4a5d23] outline-none bg-[#fdfbf7]" placeholder="Sharma" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address</label>
              <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4a5d23] outline-none bg-[#fdfbf7]" placeholder="123 Boho Street, Vasant Vihar..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4a5d23] outline-none bg-[#fdfbf7]" placeholder="New Delhi" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4a5d23] outline-none bg-[#fdfbf7]" placeholder="110057" />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-2xl text-gray-800 mb-6 border-b pb-4">2. Payment Method</h3>
          <div className="space-y-4">
            <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-[#f5f0e6] transition-colors border-[#4a5d23] bg-[#f5f0e6]/50">
              <input type="radio" name="payment" className="w-5 h-5 text-[#4a5d23] focus:ring-[#4a5d23]" defaultChecked />
              <CreditCard className="ml-4 mr-3 text-gray-600" />
              <span className="font-medium text-gray-800">Credit / Debit Card</span>
            </label>
            <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-[#f5f0e6] transition-colors">
              <input type="radio" name="payment" className="w-5 h-5 text-[#4a5d23] focus:ring-[#4a5d23]" />
              <div className="ml-4 font-medium text-gray-800 flex items-center">
                UPI (GPay, PhonePe, Paytm)
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-[#f5f0e6] transition-colors">
              <input type="radio" name="payment" className="w-5 h-5 text-[#4a5d23] focus:ring-[#4a5d23]" />
              <span className="ml-4 font-medium text-gray-800">Cash on Delivery (COD)</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col items-center pt-6 border-t">
          <p className="text-xl font-serif mb-6 text-gray-800">Amount to Pay: <span className="text-[#e2725b] font-bold">₹{getCartTotal().toLocaleString('en-IN')}</span></p>
          <button 
            onClick={handleCheckoutSuccess}
            className="w-full md:w-auto md:px-16 bg-[#4a5d23] hover:bg-[#38471a] text-white py-4 rounded-xl font-medium text-lg transition-colors shadow-lg"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}