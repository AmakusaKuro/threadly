import { useState } from "react";
import { Tag, HelpCircle, Package } from "lucide-react";

export default function OrderSummary({ cartItems = [] }) {
  const [discount, setDiscount] = useState("");
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = (subtotal * 0.091).toFixed(2);

  return (
    <div className="flex flex-col gap-5 sticky top-24">

      {/* Items */}
      <div className="flex flex-col gap-4">
        {cartItems.length === 0 ? (
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Package size={16} />
            No items in cart.
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 shrink-0">
                  {item.image
                    ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    : <div className="w-full h-full bg-gray-200" />
                  }
                </div>
                <span className="absolute -top-1.5 -right-1.5 bg-gray-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {item.qty}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{item.name}</p>
                {item.size && <p className="text-xs text-gray-400">{item.size}</p>}
              </div>
              <p className="text-sm font-medium">${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))
        )}
      </div>

      <hr className="border-gray-200" />

      {/* Discount */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            placeholder="Discount code or gift card"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-500 pr-10"
          />
          <Tag size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <button className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer bg-white">
          Apply
        </button>
      </div>

      <hr className="border-gray-200" />

      {/* Totals */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-500 flex items-center gap-1">
            Shipping <HelpCircle size={13} className="text-gray-400" />
          </span>
          <span className="text-gray-400">Enter shipping address</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-baseline">
        <span className="text-base font-semibold">Total</span>
        <div className="text-right">
          <span className="text-xs text-gray-400 mr-1">AUD</span>
          <span className="text-2xl font-bold">${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <p className="text-xs text-gray-400 -mt-3">Including ${tax} in taxes</p>

    </div>
  );
}