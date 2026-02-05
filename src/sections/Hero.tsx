import Container from "../components/ui/Container";
import { motion, type Variants } from "framer-motion";
import { Coffee, Leaf, Star } from "lucide-react";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "19K", label: "Special brewing" },
  { value: "+1000", label: "Our Product" },
  { value: "+7400", label: "Total Sales" },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const floatingIconVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center bg-white dark:bg-neutral-900 overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Left content */}
          <motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight md:text-6xl drop-shadow-sm dark:drop-shadow-md"
            >
              Enhance your coffee <br />
              Experience with us
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400"
            >
              Premium specialty coffee crafted for creatives, focus lovers, and
              calm mornings.
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                opacity: 0.8,
              }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold mt-6 rounded-full bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
            >
              Shop now
            </motion.button>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mt-10 flex gap-8">
              {stats.map((item, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold">{item.value}</p>
                  <p className="text-sm md:text-base text-neutral-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            {/* floating icons */}
            <motion.div
              variants={floatingIconVariants}
              animate="animate"
              className="absolute right-16 top-0 text-neutral-400 dark:text-neutral-600 opacity-40"
            >
              <Coffee size={22} />
            </motion.div>

            <motion.div
              variants={floatingIconVariants}
              animate="animate"
              className="absolute -right-4 bottom-16 text-neutral-400 dark:text-neutral-600 opacity-40"
            >
              <Star size={20} />
            </motion.div>

            <motion.div
              variants={floatingIconVariants}
              animate="animate"
              className="absolute left-10 bottom-32 text-neutral-400 dark:text-neutral-600 opacity-30"
            >
              <Leaf size={18} />
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative h-60 w-60 md:h-96 md:w-96 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
            >
              <img
                src="/images/hero-bg.avif"
                alt="Coffee Cup"
                className="h-full w-full object-cover hover:scale-110 hover:-rotate-1 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
