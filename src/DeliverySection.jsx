import { useState } from "react";
import { Search, HelpCircle } from "lucide-react";

const AU_STATES = ["ACT","NSW","NT","QLD","SA","TAS","VIC","WA"];

export default function DeliverySection() {
  const [form, setForm] = useState({
    country: "Australia", firstName: "", lastName: "",
    company: "", address: "", apt: "",
    suburb: "", state: "", postcode: "", phone: "",
    textOffers: false,
  });

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Delivery</h2>

      {/* Country */}
      <select
        value={form.country}
        onChange={(e) => set("country", e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500 bg-white"
      >
        <option>Australia</option>
        <option>New Zealand</option>
        <option>United States</option>
        <option>United Kingdom</option>
      </select>

      {/* First / Last */}
      <div className="grid grid-cols-2 gap-3">
        <input placeholder="First name" value={form.firstName} onChange={(e) => set("firstName", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />
        <input placeholder="Last name" value={form.lastName} onChange={(e) => set("lastName", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />
      </div>

      {/* Company */}
      <input placeholder="Company (optional)" value={form.company} onChange={(e) => set("company", e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />

      {/* Address */}
      <div className="relative">
        <input placeholder="Address" value={form.address} onChange={(e) => set("address", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500 pr-10" />
        <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Apt */}
      <input placeholder="Apartment, suite, etc. (optional)" value={form.apt} onChange={(e) => set("apt", e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />

      {/* Suburb / State / Postcode */}
      <div className="grid grid-cols-3 gap-3">
        <input placeholder="Suburb" value={form.suburb} onChange={(e) => set("suburb", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />
        <select value={form.state} onChange={(e) => set("state", e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-3 text-sm outline-none focus:border-gray-500 bg-white text-gray-500">
          <option value="">State</option>
          {AU_STATES.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input placeholder="Postcode" value={form.postcode} onChange={(e) => set("postcode", e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />
      </div>

      {/* Phone */}
      <div className="relative">
        <input placeholder="Phone (optional)" value={form.phone} onChange={(e) => set("phone", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500 pr-10" />
        <HelpCircle size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={form.textOffers} onChange={(e) => set("textOffers", e.target.checked)}
          className="w-4 h-4 rounded accent-blue-600" />
        <span className="text-sm text-gray-600">Text me with news and offers</span>
      </label>
    </div>
  );
}