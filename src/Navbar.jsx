import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { CartOverlay } from "./Cart";

const NAV_LINKS = {
  men: ["T-Shirts", "Shirts", "Jeans", "Jackets"],
  women: ["Dresses", "Tops", "Skirts", "Ethnic Wear"],
};

export default function Navbar({ onCartClick, cartCount, cartOpen, setCartOpen, cartItems, setCartItems }) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (menu) => setOpen(open === menu ? null : menu);

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-[100] bg-[#e0e1dd] font-['Fredoka'] font-bold tracking-[1.7px] px-4 py-3"
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 lg:gap-6 max-w-screen-xl mx-auto">

          {/* LEFT — desktop only */}
          <div className="hidden lg:flex items-center justify-end gap-5 font-bold text-sm whitespace-nowrap">

            <div className="relative">
              <button
                onClick={() => toggle("men")}
                className="flex items-center gap-1 text-[#1d3557] cursor-pointer bg-transparent border-none font-['Fredoka'] font-bold tracking-[1.7px] text-sm"
              >
                MEN <ChevronDown size={14} className={`transition-transform duration-200 ${open === "men" ? "rotate-180" : ""}`} />
              </button>
              {open === "men" && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg min-w-[180px] flex flex-col z-[200] py-2">
                  {NAV_LINKS.men.map((item) => (
                    <a key={item} href="#" className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 font-normal tracking-normal no-underline">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggle("women")}
                className="flex items-center gap-1 text-[#1d3557] cursor-pointer bg-transparent border-none font-['Fredoka'] font-bold tracking-[1.7px] text-sm"
              >
                WOMEN <ChevronDown size={14} className={`transition-transform duration-200 ${open === "women" ? "rotate-180" : ""}`} />
              </button>
              {open === "women" && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg min-w-[180px] flex flex-col z-[200] py-2">
                  {NAV_LINKS.women.map((item) => (
                    <a key={item} href="#" className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 font-normal tracking-normal no-underline">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <span className="text-[#1d3557] cursor-pointer text-sm">NEW ARRIVALS</span>
            <span className="text-[#e63946] cursor-pointer text-sm">MEN'S SALE</span>
            <span className="text-[#e63946] cursor-pointer text-sm">WOMEN'S SALE</span>
          </div>

          {/* CENTER — logo */}
          <div className="col-start-1 lg:col-start-2 flex justify-start lg:justify-center flex-shrink-0">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="w-[140px] lg:w-[200px] h-auto" />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="col-start-3 flex items-center justify-end gap-3">

            <div className="hidden sm:flex items-center border border-[#10243e] rounded-full px-3 py-1.5 gap-2 max-w-[220px] w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-none outline-none text-xs w-full bg-transparent"
              />
              <button className="border-none bg-transparent cursor-pointer text-[#1b263b] flex items-center">
                <Search size={16} />
              </button>
            </div>

            <Link to="/login" className="flex items-center">
              <img src="/images/user.png" alt="user" className="w-[28px] h-auto" />
            </Link>

            <div className="relative flex items-center">
              <button
                onClick={() => setCartOpen(true)}
                className="cursor-pointer bg-transparent border-none p-0 flex items-center"
              >
                <img src="/images/bag.png" alt="bag" className="w-[32px] h-auto" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <button
              className="lg:hidden bg-transparent border-none cursor-pointer text-[#1d3557] flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#e0e1dd] px-6 pt-4 pb-6 flex flex-col gap-4 text-sm font-bold tracking-[1.7px]">

            <div className="flex items-center border border-[#10243e] rounded-full px-3 py-1.5 gap-2">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-none outline-none text-xs w-full bg-transparent"
              />
              <Search size={16} className="text-[#1b263b]" />
            </div>

            <div>
              <button
                onClick={() => toggle("men")}
                className="flex items-center gap-1 text-[#1d3557] bg-transparent border-none font-['Fredoka'] font-bold tracking-[1.7px] text-sm cursor-pointer"
              >
                MEN <ChevronDown size={14} className={`transition-transform duration-200 ${open === "men" ? "rotate-180" : ""}`} />
              </button>
              {open === "men" && (
                <div className="flex flex-col mt-2 ml-3 gap-2">
                  {NAV_LINKS.men.map((item) => (
                    <a key={item} href="#" className="text-sm text-gray-600 font-normal tracking-normal no-underline">{item}</a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggle("women")}
                className="flex items-center gap-1 text-[#1d3557] bg-transparent border-none font-['Fredoka'] font-bold tracking-[1.7px] text-sm cursor-pointer"
              >
                WOMEN <ChevronDown size={14} className={`transition-transform duration-200 ${open === "women" ? "rotate-180" : ""}`} />
              </button>
              {open === "women" && (
                <div className="flex flex-col mt-2 ml-3 gap-2">
                  {NAV_LINKS.women.map((item) => (
                    <a key={item} href="#" className="text-sm text-gray-600 font-normal tracking-normal no-underline">{item}</a>
                  ))}
                </div>
              )}
            </div>

            <span className="text-[#1d3557] cursor-pointer">NEW ARRIVALS</span>
            <span className="text-[#e63946] cursor-pointer">MEN'S SALE</span>
            <span className="text-[#e63946] cursor-pointer">WOMEN'S SALE</span>
          </div>
        )}
      </nav>

      <CartOverlay
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        setItems={setCartItems}
      />
    </>
  );
}