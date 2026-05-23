import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 font-fredoka">
      <h1 className="text-5xl font-semibold mb-8 tracking-wide">Login</h1>
      <div className="flex flex-col gap-3 w-full max-w-md px-4">
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={form.email}
            onChange={handleChange}
            className="peer border-2 border-transparent px-4 pt-5 pb-2 w-full outline outline-gray-300 focus:border-gray-500 focus:outline-none "
          />
          <label className="absolute left-4 top-3.5 text-gray-400 text-base transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
            Email
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="password"
            name="password"
            placeholder=" "
            value={form.password}
            onChange={handleChange}
            className="peer border-2 border-transparent px-4 pt-5 pb-2 w-full outline outline-gray-300 focus:border-gray-500 focus:outline-none "
          />
          <label className="absolute left-4 top-3.5 text-gray-400 text-base transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
            Password
          </label>
        </div>
        <a href="#" className="text-sm underline text-gray-700 w-fit">
          Forgot your password?
        </a>
        <div className="flex flex-col items-center gap-3 mt-4">
          <button className="bg-black text-white font-semibold tracking-widest px-10 py-3 cursor-pointer hover:bg-gray-800 transition-colors">
            SIGN IN
          </button>
          <Link to="/register" className="text-sm underline text-gray-700">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
