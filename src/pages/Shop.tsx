import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import Container from "../components/ui/Container";
import { products, type Product } from "../data/products";
import ShopSidebar from "../components/shop/ShopSidebar";
import ProductItem from "../components/product/ProductItem";
import ProductModal from "../components/product/ProductModal";
import { motion } from "framer-motion";

const categories = ["all", "coffee", "tea", "muffin", "milk"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <MainLayout>
      <section className="bg-white dark:bg-neutral-900 min-h-screen py-10">
        <Container>
          <div className="flex gap-8">
            {/* Sidebar */}
            <ShopSidebar
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />

            {/* Mobile */}
            <div className="absolute top-20">
              <div className="flex flex-col md:hidden mb-6">
                <label htmlFor="category" className="sr-only">
                  Select Category
                </label>
                <select
                  id="category"
                  className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-0"
            >
              {filteredProducts.map((product: Product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  variant="row"
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </MainLayout>
  );
};

export default Shop;
