import Container from "../ui/Container";
import { motion, type Variants } from "framer-motion";
import { Coffee, Leaf, Heart, Flame } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Premium Beans",
    text: "We carefully select high-quality beans for rich flavor.",
  },
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    text: "Sustainability and fair trade are part of our values.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    text: "Every cup is crafted with passion and care.",
  },
  {
    icon: Flame,
    title: "Freshly Roasted",
    text: "Roasted in small batches for maximum freshness.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutValues = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <Container>
        <motion.h2
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 relative"
        >
          Why US
          <span className="absolute w-20 h-1 bg-amber-700 transform -translate-x-1/2 left-1/2 -bottom-3"></span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 text-center shadow-md border border-transparent hover:border-amber-700 transition-colors duration-300"
            >
              <item.icon className="mx-auto mb-4 text-amber-700" size={32} />
              <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutValues;
