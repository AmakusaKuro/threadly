import { Minus } from "lucide-react";

export default function ExpressCheckout() {
  return (
    <div>
      <p className="text-center text-sm text-gray-400 mb-3">Express checkout</p>
      <div className="grid grid-cols-3 gap-3">
        <button className="py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg text-sm transition-colors cursor-pointer border-none">
          shop
        </button>
        <button className="py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-sm font-bold transition-colors cursor-pointer border-none">
          PayPal
        </button>
        <button className="py-3 bg-black hover:bg-gray-900 text-white rounded-lg text-sm font-bold transition-colors cursor-pointer border-none">
          G Pay
        </button>
      </div>
      <div className="flex items-center gap-3 my-4">
        <hr className="flex-1 border-gray-200" />
        <span className="text-xs text-gray-400 uppercase tracking-widest">or</span>
        <hr className="flex-1 border-gray-200" />
      </div>
    </div>
  );
}