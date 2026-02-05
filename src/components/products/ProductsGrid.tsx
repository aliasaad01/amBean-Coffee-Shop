import { motion, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import { homeProducts, type Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductsGrid = () => {
  const { addToCart } = useCart();

  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-900 dark:text-white">
          Our Products
        </h2>
        <p className="text-gray-500 dark:text-neutral-400">
          Carefully crafted coffee blends to elevate every sip
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4"
      >
        {homeProducts.map((product: Product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="relative rounded-2xl bg-neutral-50 dark:bg-neutral-800 shadow hover:shadow-lg overflow-hidden cursor-pointer transition"
          >
            {/* Favorite Heart */}
            <div className="absolute top-3 right-3 z-10">
              <Heart
                size={22}
                className="p-1 rounded-full bg-white dark:bg-neutral-700 text-red-500 hover:bg-red-500 hover:text-white transition"
              />
            </div>

            {/* Image */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {product.price}
              </p>
              <button
                className="mt-2 rounded-full bg-amber-700 dark:bg-amber-600 text-white py-2 px-4 font-semibold hover:bg-amber-800 dark:hover:bg-amber-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductsGrid;
