import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Trash2, Gift, ShoppingBag } from "lucide-react";

export function CartOverlay({ isOpen, onClose, items = [], setItems }) {
  const updateQty = (id, delta) =>
    setItems((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i)
        .filter((i) => i.qty > 0)
    );

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const navigate = useNavigate();
  
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-[200] transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[300] flex flex-col
          shadow-2xl transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-2xl font-['Fredoka'] font-semibold tracking-wide">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer transition-colors duration-200 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Column labels */}
        <div className="flex justify-between px-5 py-2 text-xs font-['Fredoka'] tracking-widest uppercase text-gray-400 border-b border-gray-100">
          <span>Product</span>
          <span>Total</span>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20 gap-3 text-gray-300">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-sm text-gray-400">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 py-4 border-b border-gray-100 last:border-0"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg bg-stone-100 flex items-center justify-center shrink-0 overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <ShoppingBag size={24} className="text-gray-300" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">{item.name}</p>
                    <p className="text-sm font-semibold whitespace-nowrap">
                      ${(item.price * item.qty).toLocaleString()} AUD
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 mt-0.5 mb-2">
                    ${item.price.toLocaleString()} AUD
                    {item.size ? ` · Size ${item.size}` : ""}
                    {item.color ? ` · ${item.color}` : ""}
                  </p>

                  {/* Qty + Remove */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 bg-gray-50 hover:bg-gray-100 text-sm flex items-center justify-center cursor-pointer border-none transition-colors duration-150"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm font-medium">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 bg-gray-50 hover:bg-gray-100 text-sm flex items-center justify-center cursor-pointer border-none transition-colors duration-150"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-400 bg-transparent border-none cursor-pointer p-1 transition-colors duration-200 flex items-center"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100">
          {/* Promo */}
          <div className="flex items-center gap-2 bg-stone-50 rounded-md px-3 py-2.5 mb-3">
            <Gift size={16} className="text-gray-400 shrink-0" />
            <span className="text-sm text-gray-500">
              Free shipping on orders above $200 AUD!
            </span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-1">
            <span className="text-lg font-['Fredoka'] font-medium">Estimated total</span>
            <span className="text-sm font-bold">${total.toLocaleString()} AUD</span>
          </div>
          <p className="text-sm text-gray-400 font-['Fredoka'] mb-3">
            Tax included. Shipping & Discount calculated at checkout.
          </p>

          {/* Checkout button */}
          <button
            onClick={() => { onClose(); navigate("/checkout"); }}
            disabled={items.length === 0}
            className={`w-full bg-[#1d3557] text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded
              transition-colors duration-200
              ${items.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#16294a] cursor-pointer"}`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}