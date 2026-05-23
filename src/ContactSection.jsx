import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [news, setNews] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">Sign in</a>
      </div>
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500 transition-colors pr-10"
        />
        <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      <label className="flex items-center gap-2 mt-3 cursor-pointer">
        <input
          type="checkbox"
          checked={news}
          onChange={(e) => setNews(e.target.checked)}
          className="w-4 h-4 rounded accent-blue-600"
        />
        <span className="text-sm text-gray-600">Email me with news and offers</span>
      </label>
    </div>
  );
}