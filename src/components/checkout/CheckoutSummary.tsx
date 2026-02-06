import { useCart } from "../../context/CartContext";

const CheckoutSummary = () => {
  const { items } = useCart();

  const total = items.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^0-9.]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-bold mb-6">Order Summary</h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-green-400 font-semibold">
              {item.name} {item.quantity} x{" "}
              {Number(item.price.replace(/[^0-9.]/g, ""))}
            </span>
            <span>
              ${item.quantity * Number(item.price.replace(/[^0-9.]/g, ""))}
            </span>
          </div>
        ))}
        <div className="flex justify-between text-sm">
          <span className="text-green-400 font-semibold">Fee</span>
          <span>$5.00</span>
        </div>
      </div>

      <div className="border-t mt-6 pt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>${(total + 5).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
