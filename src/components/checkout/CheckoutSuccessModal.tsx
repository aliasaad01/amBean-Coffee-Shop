import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CheckoutSuccessModal = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-white dark:bg-neutral-900 rounded-2xl p-8 w-[90%] max-w-md text-center"
          >
            <h2 className="text-2xl font-semibold mb-3">🎉 Order Confirmed</h2>
            <p className="text-neutral-500 mb-6">
              Thank you! Your order has been placed successfully.
            </p>

            <button
              onClick={onClose}
              className="rounded-full bg-amber-700 text-white px-6 py-2 font-semibold hover:bg-amber-800 transition"
            >
              Back to shop
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutSuccessModal;
