import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Coffee, Flame, Droplet, CupSoda } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Carefully Sourced Beans",
    text: "We select high-quality beans from trusted suppliers, focusing on flavor, sustainability, and consistency.",
    icon: Coffee,
  },
  {
    id: 2,
    title: "Expert Roasting",
    text: "Each batch is roasted with precision to bring out deep aromas and balanced flavors.",
    icon: Flame,
  },
  {
    id: 3,
    title: "Thoughtful Brewing",
    text: "Our brewing process is intentional and precise, ensuring every cup reflects the bean’s true character.",
    icon: Droplet,
  },
  {
    id: 4,
    title: "Moments That Matter",
    text: "Coffee is about connection and comfort. We craft moments, not just drinks.",
    icon: CupSoda,
  },
];

const slideVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, x: -80, transition: { duration: 0.4 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutProcess = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const current = steps[index];
  const Icon = current.icon;

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Our Process
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            From bean to your perfect moment
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative bg-white dark:bg-neutral-800 rounded-3xl shadow-lg p-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={slideVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Icon
                  size={42}
                  className="text-amber-700 dark:text-amber-400"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {current.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {current.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prevStep}
              className="px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
            >
              Previous
            </button>

            <button
              onClick={nextStep}
              className="px-6 py-2 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition"
            >
              Next
            </button>
          </div>

          {/* Progress */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i === index
                    ? "bg-amber-700"
                    : "bg-neutral-300 dark:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
