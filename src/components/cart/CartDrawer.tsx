import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, closeCart, increaseQty, decreaseQty, removeItem } =
    useCart();

  const total = items.reduce((acc, item) => {
    const numericPrice = Number(item.price.replace(/[^0-9.]/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 z-50 h-full w-full md:w-[420px] bg-white dark:bg-neutral-900 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button onClick={closeCart}>
                <X />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center gap-4 text-neutral-500">
                  <ShoppingBag size={48} className="opacity-40" />
                  <p className="text-sm">Your cart is empty</p>
                  <button
                    onClick={closeCart}
                    className="text-sm underline hover:text-black dark:hover:text-white transition"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 rounded-xl border border-neutral-200 dark:border-neutral-700 p-3"
                    >
                      {/* image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />

                      {/* info */}
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-neutral-500">{item.price}</p>
                      </div>

                      {/* quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-5 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-1 text-neutral-400 hover:text-red-500 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-neutral-200 dark:border-neutral-700 p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Fee
                    </span>
                    <span className="text-lg font-semibold">$5.00</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Total
                    </span>
                    <span className="text-lg font-semibold">
                      ${(5 + total).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link to={"/checkout"}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeCart();
                    }}
                    className="w-full rounded-full bg-amber-700 text-white py-3 text-sm font-semibold hover:bg-amber-800 transition"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
