import Container from "../ui/Container";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      className="py-24"
      style={{
        backgroundImage: 'url("/images/contact-hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch ☕</h1>
          <p className="text-lg">
            Have a question, feedback, or just want to say hello? We’d love to
            hear from you.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactHero;
