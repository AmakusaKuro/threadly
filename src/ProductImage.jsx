import './App.css';
import { useState } from "react";

const images = [
  { id: 1, src: "Images/p1.webp", alt: "Side view" },
  { id: 2, src: "Images/p2.webp", alt: "Angled top" },
  { id: 3, src: "Images/p3.webp", alt: "3/4 view" },
  { id: 4, src: "Images/p4.webp", alt: "Sole view" },
  { id: 5, src: "Images/p5.webp", alt: "Sole close-up" },
  { id: 6, src: "Images/p6.webp", alt: "Back view" },
];

export default function ProductImage() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-[120px_1fr] gap-3">
      {/* Thumbnail strip */}
      <div className="flex flex-col gap-2">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActive(i)}
            className={`w-[84px] h-[84px] rounded-md overflow-hidden border-2 transition-all
              ${i === active ? "border-gray-900" : "border-transparent hover:border-gray-300"}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="rounded-xl overflow-hidden bg-gray-50 aspect-[3/4] flex items-center justify-center">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-contain transition-opacity duration-200"
        />
      </div>
    </div>
  );
}