import Container from "../ui/Container";
import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We believe coffee is more than a daily habit. <br /> It’s a
              ritual. Our journey began with a simple idea to create a place
              where quality, passion, and comfort meet in every cup. From
              carefully selecting our beans to the final pour, we focus on
              details that make a real difference. <br /> We work with trusted
              suppliers, roast with intention, and brew with precision. But what
              truly defines us is the experience we create, a space where people
              can slow down, connect, and enjoy the moment. Every cup tells a
              story. And we’re proud to share our story with you.
            </p>
          </motion.div>

          <motion.img
            src="/images/about-story.jpg"
            // src="/images/hero-bg.avif"
            alt="Our Story"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl shadow-lg object-cover w-full h-[360px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
