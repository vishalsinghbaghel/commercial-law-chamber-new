import { FaBriefcase, FaStar, FaUserTie } from "react-icons/fa";
import styles from "./WhyChoose.module.css";
import { motion } from "framer-motion";

export const WhyChoose = () => {
  const highlights = [
    {
      icon: <FaBriefcase />,
      title: "25+ Years of Experience",
      desc: "Trusted legal advisors with decades of courtroom expertise.",
    },
    {
      icon: <FaStar />,
      title: "100+ Notable Cases",
      desc: "Proven track record in high-stakes litigation and arbitration.",
    },
    {
      icon: <FaUserTie />,
      title: "Client-Centric Approach",
      desc: "Strategic counsel tailored to each client’s unique needs.",
    },
  ];

  return (
    <section className={styles.whyClc}>
      <h2 className={styles.sectionTitle}>Why Choose CLC</h2>
      <div className={styles.cardsContainer}>
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className={styles.highlightCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
