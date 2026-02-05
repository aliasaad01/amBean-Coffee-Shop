import Container from "../components/ui/Container";
import { motion, type Variants } from "framer-motion";
import { homeProducts, type Product } from "../data/products";
import ProductItem from "../components/product/ProductItem";
import ProductModal from "../components/product/ProductModal";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <Container>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Our Products
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Explore our carefully crafted coffee products
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {homeProducts.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductItem
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default Products;
