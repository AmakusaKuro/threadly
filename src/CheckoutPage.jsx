import CheckoutHeader from "./CheckoutHeader";
import ExpressCheckout from "./ExpressCheckout";
import ContactSection from "./ContactSection";
import DeliverySection from "./DeliverySection";
import ShippingMethod from "./ShippingMethod";
import PaymentSection from "./PaymentSection";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage({ cartItems = [] }) {
  const cartTotal = cartItems
    .reduce((sum, item) => sum + (item.price * (item.qty ?? 1)), 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-white">
      <CheckoutHeader />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        <div className="px-6 py-10 lg:pr-16 flex flex-col gap-8">
          <ExpressCheckout />
          <ContactSection />
          <DeliverySection />
          <ShippingMethod />
          <PaymentSection cartTotal={cartTotal} />  {/* ← pass cartTotal */}
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer border-none text-base">
            Pay now
          </button>
          <div className="flex gap-4 text-xs text-gray-400 flex-wrap pb-10">
            {["Refund policy", "Shipping", "Privacy policy", "Terms of service", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-gray-600 underline">{l}</a>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border-l border-gray-200 px-6 py-10 lg:pl-16">
          <OrderSummary cartItems={cartItems} />
        </div>

      </div>
    </div>
  );
}
