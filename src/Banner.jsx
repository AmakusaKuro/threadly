import { useState, useEffect } from "react";
import "./Banner.css";

const slides = [
  { img: "/Images/banner1.jpg" },
  { img: "/Images/banner2.jpg" },
  { img: "/Images/banner3.png" },
  { img: "/Images/banner4.png" },
  { img: "/Images/banner5.jpg" },
  { img: "/Images/banner6.jpg" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length);
  };
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer); // cleanup
  }, [isHovered]);

  return (
    <div className="banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* arrows */}
      <button className="arrow prev" onClick={() => goTo(current - 1)}>
        ‹
      </button>
      <button className="arrow next" onClick={() => goTo(current + 1)}>
        ›
      </button>
      {/* slides */}
      <div
        className="track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="slide">
            <img src={slide.img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
      {/* dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
