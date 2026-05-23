import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Guard: if someone navigates here directly without payment
  if (!state?.paymentId) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">

        <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-1">Order Confirmed!</h1>
        <p className="text-gray-500 text-sm mb-6">
          Thank you, {state.payerName}! Your payment was successful.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-left text-sm mb-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Payment ID</span>
            <span className="font-mono text-xs text-gray-700">{state.paymentId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Amount Paid</span>
            <span className="font-semibold">{state.currency} {state.amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="text-green-600 font-semibold">Paid ✓</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}