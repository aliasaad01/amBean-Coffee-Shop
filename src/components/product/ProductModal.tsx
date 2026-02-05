import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../data/products";

type Props = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: Props) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 shadow-xl overflow-hidden">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <X />
              </button>

              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-neutral-500">{product.price}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.description}
                </p>

                <button
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                    onClose();
                  }}
                  className="mt-4 rounded-full bg-amber-700 text-white py-3 font-semibold hover:bg-amber-800 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
