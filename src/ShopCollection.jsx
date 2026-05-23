import "./App.css";

const collections = [
  { id: "menshoe", label: "Men's →" },
  { id: "womenshoe", label: "Women's →" },
  { id: "apparel", label: "Apparel & More →" },
];

export default function ShopCollection() {
  return (
    <div className="px-4 py-6 font-fredoka w-full max-w-7xl mx-auto">
      <h5 className="font-semibold text-2xl tracking-wider mb-4">
        Shop by Collection
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {collections.map((item) => (
          <a key={item.id} href="" className="block">
            <img
              src={`/Images/${item.id}.png`}
              className="w-full h-100 object-cover bg-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105"
              alt={item.id}
            />
            <p className="mt-2 font-semibold text-lg tracking-wide">
              {item.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
