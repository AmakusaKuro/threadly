import { Truck } from "lucide-react";

export default function ShippingMethod() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Shipping method</h2>
      <div className="bg-gray-100 rounded-lg px-4 py-4 text-sm text-gray-400 text-center flex items-center justify-center gap-2">
        <Truck size={16} />
        Enter your shipping address to view available shipping methods.
      </div>
    </div>
  );
}