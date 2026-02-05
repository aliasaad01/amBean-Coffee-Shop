import Container from "../ui/Container";
import { motion, type Variants } from "framer-motion";

const team = [
  {
    name: "Alex Morgan",
    role: "Head Roaster",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sara Williams",
    role: "Quality Manager",
    image: "/images/team-2.jpg",
  },
  {
    name: "James Carter",
    role: "Brand Designer",
    image: "/images/team-3.jpg",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutTeam = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2">
              The people behind every perfect cup
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden text-center"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-64 w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutTeam;
