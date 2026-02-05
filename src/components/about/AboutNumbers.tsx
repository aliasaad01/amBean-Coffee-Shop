import Container from "../ui/Container";
import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "7K+", label: "Happy Customers" },
  { value: "20+", label: "Coffee Varieties" },
  { value: "100%", label: "Quality Beans" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutNumbers = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl font-bold text-amber-700 dark:text-amber-500">
                {stat.value}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutNumbers;
