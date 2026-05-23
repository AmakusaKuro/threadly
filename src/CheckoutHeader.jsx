import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CheckoutHeader() {
  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-gray-800 font-semibold text-lg tracking-wide">
          threadly.com.au
        </Link>
        <ShoppingBag size={22} className="text-gray-500" />
      </div>
    </header>
  );
}