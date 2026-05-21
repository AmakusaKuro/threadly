import { useEffect } from "react";

export default function SizeChart({ onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-200"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-60 overflow-y-auto">
        <div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">

          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-medium">Size chart</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-lg leading-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-1">
            Shoes fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all styles.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-1">
            Did you know our shoes are unisex? You can cross over to find shoes in your size.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            <span className="font-medium text-gray-900">Here's how it works: </span>
            If you wear a women's size 12, try a men's size 10 or 11. If you wear a men's size 7, try a women's size 8 or 9.
          </p>

          {/* Women's */}
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Women's shoes</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr>
                  <th className="bg-gray-100 border border-gray-200 px-2 py-2 text-gray-500 font-medium w-10"></th>
                  {["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11"].map(s => (
                    <th key={s} className="bg-gray-100 border border-gray-200 px-2 py-2 font-medium text-gray-600">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "US", vals: ["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11"] },
                    { label: "UK", vals: ["2-2.5","2.5","3-3.5","3.5","4-4.5","4.5","5-5.5","5.5","6-6.5","6.5","7-7.5","7.5","8-8.5"] },
                    { label: "EU", vals: ["35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5","41"] },
                    { label: "cm", vals: ["22","22.5","23","23.5","24","24.5","25","25.5","26","26.5","27","27.5","28"] },
                ].map((row, ri) => (
                  <tr key={row.label}>
                    <td className="bg-[#1d3557] text-white text-center px-2 py-2 font-medium border border-gray-200">{row.label}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className={`text-center px-2 py-2 border border-gray-200 ${ri % 2 === 1 ? "bg-gray-50" : ""}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Men's */}
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Men's shoes</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr>
                  <th className="bg-gray-100 border border-gray-200 px-2 py-2 text-gray-500 font-medium w-10"></th>
                  {["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14"].map(s => (
                    <th key={s} className="bg-gray-100 border border-gray-200 px-2 py-2 font-medium text-gray-600">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                 { label: "US", vals: ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14"] },
{ label: "UK", vals: ["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"] },
{ label: "EU", vals: ["41","41.5","42","42.5","43","43.5","44","44.5","45","45.5","46","46.5","47"] },
{ label: "cm", vals: ["26","26.5","27","27.5","28","28.5","29","29.5","30","30.5","31","31.5","32"] },
                ].map((row, ri) => (
                  <tr key={row.label}>
                    <td className="bg-[#1d3557] text-white text-center px-2 py-2 font-medium border border-gray-200">{row.label}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className={`text-center px-2 py-2 border border-gray-200 ${ri % 2 === 1 ? "bg-gray-50" : ""}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}