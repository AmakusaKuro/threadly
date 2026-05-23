import "./App.css";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductAccordion from "./ProductAccordion";

export default function ProductPage({ setCartItems }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
         {/* Left column — image + accordion */}
        <div className="flex flex-col">
          <ProductImage />
          <ProductAccordion />
        </div>
        {/* Right column — product info */}
        <ProductInfo setCartItems={setCartItems} />
      </div>
    </main>
  );
}
