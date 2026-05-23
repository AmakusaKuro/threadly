
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Women's Breezer Point",
    price: "$180.00 AUD",
    hoverSrc: "Images/PointRed-2.png",
    src: "Images/PointRed-1.png",
    alt: "shoe 1",
  },
  {
    id: 2,
    name: "Women's Breezer Point",
    price: "$180.00 AUD",
    hoverSrc: "Images/PointBlk-2.png",
    src: "Images/PointBlk-1.png",
    alt: "shoe 2",
  },
  {
    id: 3,
    name: "Women's Breezer Mary Jane",
    price: "$170.00 AUD",
    hoverSrc: "Images/MJ-2.png",
    src: "Images/MJ-1.png",
    alt: "shoe 3",
  },
  {
    id: 4,
    name: "Men's Cruiser Terralux",
    price: "$220.00 AUD",
    hoverSrc: "Images/BrownTx-2.png",
    src: "Images/BrownTx-1.png",
    alt: "shoe 4",
  },
  {
    id: 5,
    name: "Men's Cruiser Terralux",
    price: "$220.00 AUD",
    hoverSrc: "Images/OldTx-2.png",
    src: "Images/OldTx-1.png",
    alt: "shoe 5",
  },
  {
    id: 6,
    name: "Men's Runner NZ Terralux",
    price: "$240.00 AUD",
    hoverSrc: "Images/Runner-2.png",
    src: "Images/Runner-1.png",
    alt: "shoe 6",
  },
  {
    id: 7,
    name: "Women's Dasher",
    price: "$240.00 AUD",
    hoverSrc: "Images/Dasher-2.png",
    src: "Images/Dasher-1.png",
    alt: "shoe 7",
  },
  {
    id: 8,
    name: "Men's Dasher NZ",
    price: "$240.00 AUD",
    hoverSrc: "Images/DasherM-2.png",
    src: "Images/DasherM-1.png",
    alt: "shoe 8",
  },
];

export default function NewSlide() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const navigate = useNavigate();
  // Detect visible count based on window width
  const visibleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 4;
  const totalSteps = products.length - visibleCount;

  const go = (n) => setIndex(Math.max(0, Math.min(n, totalSteps)));

  return (
    <div className="max-w-360 mx-auto px-4 py-8 font-fredoka">
      <h2 className="text-2xl font-bold tracking-wide mb-6">New Arrivals</h2>

      <div
        className="overflow-hidden"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
        }}
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${index * (100 / visibleCount)}% - ${index}rem))`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
               onClick={() => product.id === 1 && navigate("/product")}
              // 2 cards on mobile, 4 on md+
              className="group cursor-pointer shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square relative">
                {" "}
                {/* add relative */}
                {/* Default image */}
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                {/* Hover image */}
                <img
                  src={product.hoverSrc}
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.name}
              </p>
              <p className="text-lg text-gray-500 mt-0.5">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="w-8 h-8 cursor-pointer border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          ‹
        </button>
        <span className="text-sm text-gray-500 tabular-nums">
          {index + 1} / {totalSteps + 1}
        </span>
        <button
          onClick={() => go(index + 1)}
          disabled={index === totalSteps}
          className="w-8 h-8 cursor-pointer border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-10 py-3 bg-gray-900 text-white text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition">
          View All
        </button>
      </div>
    </div>
  );
}
