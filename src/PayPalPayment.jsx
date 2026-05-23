import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

export default function PayPalPayment({ cartTotal }) {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();
  const navigate = useNavigate();

  if (isPending) return <PayPalLoading />;
  if (isRejected) return <PayPalError />;

  return (
    <PayPalButtons
      style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Threadly Order",
              amount: {
                currency_code: "USD",
                value: cartTotal ? parseFloat(cartTotal).toFixed(2) : "0.00",
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          navigate("/order-success", {
            state: {
              paymentId: details.id,
              payerName: details.payer.name.given_name,
              amount: details.purchase_units[0].amount.value,
              currency: details.purchase_units[0].amount.currency_code,
            },
          });
        });
      }}
      onCancel={() => {
        alert("Payment cancelled. You can try again.");
      }}
      onError={(err) => {
        console.error("PayPal error:", err);
        alert("Something went wrong with PayPal. Please try again.");
      }}
    />
  );
}

function PayPalLoading() {
  return (
    <div className="flex items-center justify-center py-4 gap-2 text-sm text-gray-500">
      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      Loading PayPal...
    </div>
  );
}

function PayPalError() {
  return (
    <p className="text-sm text-red-500 py-2">
      Failed to load PayPal. Please refresh and try again.
    </p>
  );
}