import Container from "../components/ui/Container";
import { motion, type Variants } from "framer-motion";
import { featuredProduct } from "../data/featuredProduct";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Heart } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CTA = () => {
  const { addToCart } = useCart();
  const [favorite, setFavorite] = useState(false);

  return (
    <section className="relative w-full dark:bg-neutral-900 py-10 overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 items-center gap-12"
        >
          {/* Left content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {featuredProduct.name} <span className="ml-2">🛒</span>
            </h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-6">
              {featuredProduct.description}
            </p>
            <p className="text-xl font-semibold text-amber-800 dark:text-amber-400 mb-6">
              {featuredProduct.price}
            </p>
            <button
              className="rounded-full bg-amber-700 dark:bg-amber-600 text-white py-3 px-8 font-semibold hover:bg-amber-800 dark:hover:bg-amber-700 transition-colors
                          shadow-md hover:shadow-lg"
              onClick={() => {
                addToCart({
                  id: featuredProduct.id,
                  name: featuredProduct.name,
                  price: featuredProduct.price,
                  image: featuredProduct.image,
                  quantity: 1,
                });
              }}
            >
              Shop Now
            </button>
          </motion.div>

          {/* Right content */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative h-80 w-80 md:h-96 md:w-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-700"
              />

              {/* Favorite Heart */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFavorite((prev) => !prev);
                }}
                className={`absolute top-3 right-3 z-10 text-red-500 rounded-full p-1 transition-all
          hover:bg-red-500 hover:text-white hover:scale-110
          ${favorite ? "bg-red-500 text-white" : ""}`}
              >
                <Heart size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
