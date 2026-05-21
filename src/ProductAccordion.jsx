import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "DETAILS",
    content:
      "A softly pointed toe and slightly raised heel sharpen up our fan-favourite women's flat - just enough polish, no extra fuss. Light, airy, and easy to wear, this is the flat that pulls an outfit together without trying too hard.",
  },
  {
    title: "SUSTAINABILITY",
    content:
      "Our shoes are made with natural and recycled materials — merino wool, eucalyptus tree fibre, and sugarcane-based soles. We're committed to reducing our carbon footprint with every pair we make.",
  },
  {
    title: "CARE GUIDE",
    content:
      "Machine wash cold, gentle cycle. Remove insoles and laces before washing. Air dry only — do not tumble dry, iron, or dry clean.",
  },
  {
    title: "SHIPPING & RETURNS",
    content:
      "Free shipping on orders over $200 AUD. Returns accepted within 30 days of purchase. Items must be unworn and in original packaging.",
  },
];

export default function ProductAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full mt-10 border-t border-gray-200">
      {sections.map((section, i) => (
        <div key={i} className="border-b border-gray-200">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left cursor-pointer bg-transparent border-none group"
          >
            <span className="text-sm font-bold tracking-widest text-gray-900">
              {section.title}
            </span>
            <ChevronDown
              size={18}
              className={`text-gray-400 transition-transform duration-300 group-hover:text-gray-700
                ${open === i ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="text-sm text-gray-600 leading-relaxed pb-6">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}