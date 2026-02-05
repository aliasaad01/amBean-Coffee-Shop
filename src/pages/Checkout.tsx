import MainLayout from "../layouts/MainLayout";
import Container from "../components/ui/Container";
import { useCart } from "../context/CartContext";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import CheckoutForm from "../components/checkout/CheckoutForm";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <section className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-neutral-500">Your cart is empty</p>
          <Link
            to="/shop"
            className="text-amber-700 font-semibold hover:underline"
          >
            Go to shop
          </Link>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="bg-white dark:bg-neutral-900 py-16 min-h-screen">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <CheckoutSummary />
            <CheckoutForm />
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default Checkout;
