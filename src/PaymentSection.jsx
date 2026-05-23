import { useState } from "react";
import { Lock, HelpCircle, CreditCard, Wallet } from "lucide-react";
import PayPalPayment from "./PayPalPayment";
import RazorpayPayment from "./RazorpayPayment";

export default function PaymentSection({ cartTotal }) {
  const [method, setMethod] = useState("card");
  const [billing, setBilling] = useState(true);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Payment</h2>
      <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
        <Lock size={13} /> All transactions are secure and encrypted.
      </p>

      <div className="border border-gray-200 rounded-lg overflow-hidden">

        {/* Credit card */}
        <label className={`flex items-center justify-between px-4 py-3 cursor-pointer gap-3
          ${method === "card" ? "bg-blue-50 border-b border-blue-200" : "border-b border-gray-200 hover:bg-gray-50"}`}>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" value="card" checked={method === "card"}
              onChange={() => setMethod("card")} className="accent-blue-600" />
            <span className="text-sm font-medium">Credit card</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <CreditCard size={18} className="text-blue-700" />
            <span className="text-[11px] border border-gray-200 rounded px-1 text-blue-700 font-bold">VISA</span>
            <span className="text-[11px] border border-gray-200 rounded px-1 text-red-500 font-bold">MC</span>
            <span className="text-[11px] border border-gray-200 rounded px-1 text-blue-900 font-bold">AMEX</span>
          </div>
        </label>

        {/* Card fields */}
        {method === "card" && (
          <div className="px-4 py-4 flex flex-col gap-3 bg-white border-b border-gray-200">
            <div className="relative">
              <input placeholder="Card number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500 pr-10" />
              <Lock size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Expiration date (MM / YY)"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />
              <div className="relative">
                <input placeholder="Security code"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500 pr-10" />
                <HelpCircle size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <input placeholder="Name on card"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-500" />
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={billing} onChange={(e) => setBilling(e.target.checked)}
                className="w-4 h-4 accent-blue-600" />
              <span className="text-sm text-gray-600">Use shipping address as billing address</span>
            </label>
          </div>
        )}

        {/* PayPal */}
        <label className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-200
          ${method === "paypal" ? "bg-blue-50" : "hover:bg-gray-50"}`}>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" value="paypal" checked={method === "paypal"}
              onChange={() => setMethod("paypal")} className="accent-blue-600" />
            <span className="text-sm font-medium">PayPal</span>
          </div>
          <Wallet size={18} className="text-blue-700" />
        </label>

        {method === "paypal" && (
          <div className="px-4 py-4 bg-white border-b border-gray-200">
            <p className="text-sm text-gray-500 mb-3">
              You'll be redirected to PayPal to complete your payment.
            </p>
            <PayPalPayment cartTotal={cartTotal} />
          </div>
        )}

        {/* Afterpay */}
        <label className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-200
          ${method === "afterpay" ? "bg-blue-50" : "hover:bg-gray-50"}`}>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" value="afterpay" checked={method === "afterpay"}
              onChange={() => setMethod("afterpay")} className="accent-blue-600" />
            <span className="text-sm font-medium">Afterpay</span>
          </div>
          <span className="bg-green-400 text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
            <CreditCard size={12} /> afterpay
          </span>
        </label>

        {/* Razorpay — inside the border div */}
        <label className={`flex items-center justify-between px-4 py-3 cursor-pointer
          ${method === "razorpay" ? "bg-blue-50" : "hover:bg-gray-50"}`}>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" value="razorpay" checked={method === "razorpay"}
              onChange={() => setMethod("razorpay")} className="accent-blue-600" />
            <span className="text-sm font-medium">Razorpay</span>
          </div>
          <span className="text-[#072654] font-bold text-sm italic">razorpay</span>
        </label>

        {method === "razorpay" && (
          <div className="px-4 py-4 bg-white">
            <p className="text-sm text-gray-500 mb-3">
              Pay securely using UPI, Cards, NetBanking, or Wallets.
            </p>
            <RazorpayPayment cartTotal={cartTotal} />
          </div>
        )}

      </div>

      {/* Save info */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium">Save my information for a faster checkout</p>
          <p className="text-xs text-gray-400 mt-0.5">
            By paying, you agree to create a Shop account subject to Shop's{" "}
            <a href="#" className="underline">Terms</a> and{" "}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
        <button className="text-sm text-blue-600 hover:underline whitespace-nowrap bg-transparent border-none cursor-pointer">
          Not now
        </button>
      </div>
    </div>
  );
}