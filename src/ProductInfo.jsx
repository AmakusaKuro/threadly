import "./App.css";
import { useState } from "react";
import SizeChart from "./SizeChart";
import { Star, ChevronDown, ShoppingCart, Gift, Check } from "lucide-react";

const SIZES = ["W6", "W7", "W8", "W9", "W10", "W11", "W12"];
const OUT_OF_STOCK = ["W12"];

const COLORS = {
  classics: [{ label: "Black", value: "black", hex: "#2a2a2a" }],
  limited: [
    {
      label: "Warm Red (Dark Cocoa Sole)",
      value: "warm-red",
      hex: "linear-gradient(135deg, #c0392b 50%, #3d1c10 50%)",
    },
  ],
};

export default function ProductInfo({ setCartItems, setCartOpen }) {
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [selectedSize, setSelectedSize] = useState("W7");
  const [selectedColor, setSelectedColor] = useState("black");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const activeColorLabel =
    COLORS.limited.find((c) => c.value === selectedColor)?.label ??
    COLORS.classics.find((c) => c.value === selectedColor)?.label ??
    "";

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const id = `breezer-point-${selectedSize}`;
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      }
      return [
        ...prev,
        {
          id,
          name: "Women's Breezer Point",
          price: 180,
          size: selectedSize,
          color: "Warm Red",
          image: "Images/PointRed-1.png",
          qty,
        },
      ];
    });

    // show added state then open cart
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setCartOpen(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      {/* Title */}
      <h1 className="text-3xl font-medium leading-tight">
        Women's Breezer Point
      </h1>

      {/* Reviews */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-400" strokeWidth={1.5} />
          ))}
        </div>
        <span className="text-sm text-gray-500">0 Reviews</span>
      </div>

      {/* Price */}
      <div>
        <p className="text-xl font-medium">$180.00 AUD</p>
        <p className="text-sm text-gray-500 mt-1">
          Tax included.{" "}
          <span className="underline cursor-pointer">Shipping</span> calculated
          at checkout.
        </p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <span>
            or 4 interest-free payments of <strong>$45.00</strong> with
          </span>
          <span className="bg-green-200 text-green-900 text-xs font-medium px-2 py-0.5 rounded">
            afterpay &gt;
          </span>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Color swatches — Classics */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Classics:</p>
        <div className="flex gap-2">
          {COLORS.classics.map((c) => (
            <button
              key={c.value}
              title={c.label}
              onClick={() => setSelectedColor(c.value)}
              className={`w-8 h-8 rounded-full transition-all ring-offset-2 ${
                selectedColor === c.value ? "ring-2 ring-gray-900" : ""
              }`}
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Color swatches — Limited Edition */}
      <div>
        <p className="text-sm text-gray-500 mb-2">
          Limited Edition:{" "}
          <span className="text-gray-900">
            {activeColorLabel || "Warm Red (Dark Cocoa Sole)"}
          </span>
        </p>
        <div className="flex gap-2">
          {COLORS.limited.map((c) => (
            <button
              key={c.value}
              title={c.label}
              onClick={() => setSelectedColor(c.value)}
              className={`w-8 h-8 rounded-full transition-all ring-offset-2 ${
                selectedColor === c.value ? "ring-2 ring-gray-900" : ""
              }`}
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Sizes */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => {
            const oos = OUT_OF_STOCK.includes(s);
            return (
              <button
                key={s}
                disabled={oos}
                onClick={() => setSelectedSize(s)}
                className={`px-4 py-2 rounded-full border text-sm transition-all
                  ${oos ? "opacity-40 line-through cursor-not-allowed border-gray-200" : ""}
                  ${
                    selectedSize === s && !oos
                      ? "bg-gray-900 text-white border-gray-900"
                      : !oos
                        ? "border-gray-300 hover:border-gray-900"
                        : ""
                  }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setShowSizeChart(true)}
          className="text-lg font-bold underline mt-2 cursor-pointer bg-transparent border-none"
        >
          SIZE GUIDE
        </button>
        {showSizeChart && <SizeChart onClose={() => setShowSizeChart(false)} />}
        <p className="text-xs text-gray-400 mt-1">Shoes are in US sizing</p>
      </div>

      <hr className="border-gray-200" />

      {/* Quantity */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Quantity</p>
        <div className="flex items-center border border-gray-300 rounded-lg w-fit overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors cursor-pointer border-none bg-transparent"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-medium border-x border-gray-200">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-lg hover:bg-gray-100 transition-colors cursor-pointer border-none bg-transparent"
          >
            +
          </button>
        </div>
      </div>

      {/* ADD TO CART — animated */}
      <button
        onClick={handleAddToCart}
        disabled={added}
        className={`w-full py-3.5 rounded-lg text-sm font-medium tracking-wide
          flex items-center justify-center gap-2 cursor-pointer border-none
          transition-all duration-300 ease-in-out
          ${added
            ? "bg-green-600 text-white scale-[0.98]"
            : "bg-gray-900 text-white hover:bg-gray-700 active:scale-[0.97]"
          }`}
      >
        {added ? (
          <>
            <Check size={16} className="animate-bounce" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart size={16} />
            ADD TO CART
          </>
        )}
      </button>

      <button className="w-full py-3.5 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 cursor-pointer border-none">
        Buy with Shop
      </button>

      <button className="text-sm text-gray-500 underline bg-transparent border-none cursor-pointer">
        More payment options
      </button>

      <p className="text-sm text-gray-400 text-center">
        Free Shipping Over $200 &amp; Easy Returns.
      </p>

      {/* Promo bar */}
      <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 text-sm text-gray-500">
        <Gift size={16} className="text-gray-400 shrink-0" />
        <span>Spend $200, Get Free No Show Socks</span>
        <ChevronDown size={16} className="ml-auto text-gray-400 shrink-0" />
      </div>
    </div>
  )
}
