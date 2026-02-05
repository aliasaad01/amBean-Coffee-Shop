import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="pb-10 bg-white dark:bg-neutral-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Ready to taste the difference?
          </h2>
          <Link
            to="/shop"
            className="inline-block mt-4 rounded-full bg-amber-700 text-white px-8 py-3 font-semibold hover:bg-amber-800 transition-colors"
          >
            Explore Our Coffee
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutCTA;
