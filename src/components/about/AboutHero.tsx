import Container from "../ui/Container";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('/images/about-hero-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brewing Moments, Not Just Coffee ☕
          </h1>
          <p className="text-lg text-neutral-200">
            Every cup we serve carries passion, quality, and a story worth
            sharing.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;
