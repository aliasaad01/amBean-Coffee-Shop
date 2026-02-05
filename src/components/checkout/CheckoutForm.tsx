import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CheckoutSuccessModal from "./CheckoutSuccessModal";
import { toast } from "sonner";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { clearCart } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      clearCart();
      toast.success("Order placed successfully ☕");
      setSuccess(true);
    }, 1500);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col gap-4
                  shadow-md hover:shadow-lg transition duration-300"
      >
        <h2 className="text-lg font-semibold mb-4">Billing Details</h2>

        <input required placeholder="Full Name" className="input" />
        <input
          required
          type="email"
          placeholder="Email Address"
          className="input"
        />
        <input required placeholder="Shipping Address" className="input" />
        <input required placeholder="Card Number (Mock)" className="input" />

        <button
          disabled={loading}
          className="mt-4 rounded-full bg-amber-700 text-white py-3 font-semibold hover:bg-amber-800 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>

      <CheckoutSuccessModal open={success} onClose={() => setSuccess(false)} />
    </>
  );
};

export default CheckoutForm;
