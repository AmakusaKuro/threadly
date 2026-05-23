import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function RazorpayPayment({ cartTotal }) {
  const navigate = useNavigate();

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: Math.round(parseFloat(cartTotal) * 100), // paise
      currency: "INR", // ← changed from USD to INR
      name: "Threadly",
      description: "Order Payment",
      image: "/images/logo.png",
      handler: function (response) {
        navigate("/order-success", {
          state: {
            paymentId: response.razorpay_payment_id,
            payerName: "Customer",
            amount: cartTotal,
            currency: "INR",
          },
        });
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#1d3557",
      },
      modal: {
        ondismiss: () => {
          console.log("Payment dismissed");
        },
      },
    };

    if (!window.Razorpay) {
      alert("Razorpay failed to load. Please refresh and try again.");
      return;
    }

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", (response) => {
      console.error("Payment failed:", response.error);
      alert(`Payment failed: ${response.error.description}`);
    });

    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full py-3 bg-[#072654] hover:bg-[#051d40] text-white rounded-lg text-sm font-medium transition-colors cursor-pointer border-none flex items-center justify-center gap-2"
    >
      <ShoppingBag size={16} />
      Pay with Razorpay
    </button>
  );
}