import Container from "../ui/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@amBean.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+963 937237163",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tartous, Syria",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-800">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 shadow"
            >
              <item.icon className="h-8 w-8 text-amber-700 dark:text-amber-500 mb-4" />
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
