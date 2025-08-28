
import styles from "./Disputes.module.css";
import { motion } from "framer-motion";

export const Disputes = () => {
  return (
    <div className={styles["disputes-page"]}>
      {/* Hero Section */}
      <motion.div
        className={styles["hero"]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Regulatory & Commercial Disputes</h1>
        <h3 className={styles["subtitle"]}>
          Focused Expertise in Complex Legal Challenges
        </h3>
      </motion.div>

      {/* Overview */}
      <section className={styles["overview"]}>
        <p>
          At the Commercial Law Chamber, we provide strategic, outcome-oriented
          legal representation in complex regulatory and commercial disputes. As
          a boutique law firm headquartered in New Delhi, we combine
          domain-specific expertise with personalized attention, ensuring
          tailored legal solutions in an increasingly intricate regulatory
          landscape.
        </p>
      </section>

      {/* Regulatory Practice */}
      <section className={styles["regulatory"]}>
        <h2>⚖️ Regulatory Practice</h2>
        <p>
          Our regulatory engagements span government bodies, statutory
          regulators, and adjudicatory forums. We regularly represent clients
          before SEBI, CCI, NCLT, and other sector-specific regulators. Our
          services include:
        </p>
        <ul>
          <li>Defending enforcement actions</li>
          <li>Resolving licensing and compliance disputes</li>
          <li>Advising on regulatory investigations</li>
          <li>Mitigating risks tied to statutory breaches</li>
        </ul>
      </section>

      {/* Commercial Disputes */}
      <section className={styles["commercial"]}>
        <h2>💼 Commercial Disputes</h2>
        <p>
          We act in high-stakes matters involving shareholder conflicts,
          contractual breaches, joint venture disputes, supply chain
          interruptions, commercial fraud, and investment-related disagreements.
          Our litigation and dispute resolution experience spans:
        </p>
        <ul>
          <li>Financial services</li>
          <li>Real estate</li>
          <li>Infrastructure</li>
          <li>Manufacturing</li>
          <li>Technology</li>
        </ul>
      </section>

      {/* Strategic Approach */}
      <section className={styles["approach"]}>
        <h2>🎯 Strategic Approach</h2>
        <p>
          We take a pragmatic, business-conscious approach to every
          matter—offering pre-dispute strategy, legal risk assessment, and
          settlement structuring to preserve relationships and commercial value.
          Our proficiency spans litigation, arbitration, and alternative dispute
          resolution.
        </p>
      </section>

      {/* Commitment */}
      <section className={styles["commitment"]}>
        <h2>🔍 Our Commitment</h2>
        <p>
          At every stage, we prioritize clear communication, tactical foresight,
          and relentless pursuit of results— delivering legal solutions that
          align with our clients' commercial objectives while safeguarding
          operational integrity.
        </p>
      </section>

      {/* CTA */}
      <div className={styles["cta"]}>
        <button className={styles["cta-button"]}>Request Legal Consultation</button>
      </div>
    </div>
  );
};


