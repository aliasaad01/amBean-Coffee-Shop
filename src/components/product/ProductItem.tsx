import { motion, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import type { Product } from "../../data/products";

type Props = {
  product: Product;
  variant?: "card" | "row";
  onClick?: () => void;
};

const variantsMap: Record<NonNullable<Props["variant"]>, Variants> = {
  card: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  row: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

const ProductItem = ({ onClick, product, variant = "card" }: Props) => {
  const { addToCart } = useCart();
  const [favorite, setFavorite] = useState(false);

  return (
    <motion.div
      variants={variantsMap[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      onClick={onClick}
      className={`relative rounded-2xl shadow-md overflow-hidden cursor-pointer transition-colors hover:shadow-lg
        ${
          variant === "card"
            ? "bg-white dark:bg-neutral-800"
            : "bg-neutral-50 dark:bg-neutral-800"
        }`}
    >
      {/* Heart */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setFavorite((p) => !p);
        }}
        className={`absolute top-3 right-3 z-10 text-red-500 rounded-full p-1 transition-all
          hover:bg-red-500 hover:text-white hover:scale-110
          ${favorite ? "bg-red-500 text-white" : ""}`}
      >
        <Heart size={20} />
      </button>

      {/* Image */}
      <div
        className={`overflow-hidden ${variant === "card" ? "h-60" : "h-64"}`}
      >
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
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {product.price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            });
          }}
          className="mt-2 rounded-full bg-amber-700 dark:bg-amber-600 text-white py-2 px-4 text-sm font-semibold hover:bg-amber-800 dark:hover:bg-amber-700 transition"
        >
          {variant === "card" ? "Shop Now" : "Add to Cart"}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductItem;
