import { FaPenFancy } from "react-icons/fa";
import styles from "./RecentInsight.module.css";
import { motion } from "framer-motion";

export const RecentInsights = () => {
  const insights = [
    {
      title: "Decoding GST Litigation Trends",
      desc: "A deep dive into emerging patterns in indirect tax disputes and how businesses can stay ahead.",
      link: "/blog/gst-litigation-trends",
    },
    {
      title: "Arbitration vs. Litigation: What Works Best?",
      desc: "Exploring the pros and cons of dispute resolution mechanisms in commercial contracts.",
      link: "/blog/arbitration-vs-litigation",
    },
    {
      title: "Regulatory Compliance in 2025",
      desc: "Key updates in licensing and compliance frameworks every company should know.",
      link: "/blog/regulatory-compliance-2025",
    },
  ];

  return (
    <section className={styles.recentInsights}>
      <h2 className={styles.sectionTitle}>Recent Insights</h2>
      <div className={styles.cardsContainer}>
        {insights.map((item, index) => (
          <motion.div
            key={index}
            className={styles.insightCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>
              <FaPenFancy />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.link} className={styles.readMore}>
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
