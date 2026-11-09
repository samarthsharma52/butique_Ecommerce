import { CheckCircle2 } from 'lucide-react';

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-fade-in-up">
        <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-gray-800 mb-2">Order Confirmed!</h3>
        <p className="text-gray-500 mb-6">Thank you for shopping with Rivaaj. Your earthy essentials are on their way.</p>
        <div className="w-8 h-8 border-4 border-[#e2725b] border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}