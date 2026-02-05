import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Message sent successfully ☕");

    // reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
      <Container>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Send us a message
          </h2>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-lg border border-neutral-300 dark:border-neutral-700 p-3 bg-transparent"
          />

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg border border-neutral-300 dark:border-neutral-700 p-3 bg-transparent"
          />

          <textarea
            placeholder="Your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="rounded-lg border border-neutral-300 dark:border-neutral-700 p-3 bg-transparent resize-none"
          />

          <button
            type="submit"
            className="mt-2 rounded-full bg-amber-700 text-white py-3 font-semibold hover:bg-amber-800 transition"
          >
            Send Message
          </button>
        </motion.form>
      </Container>
    </section>
  );
};

export default ContactForm;
