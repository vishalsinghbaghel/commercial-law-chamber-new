import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import { AnimatedButton } from "../../common/AnimatedButton";

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <div className={styles.backgroundImage} />
      <section className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className={styles.heroTitle}>
            Leading Law Firm for Tax & Commercial Litigation
          </h1>
          <p className={styles.heroSubtitle}>
            Trusted by industry leaders for high-stakes disputes and regulatory
            expertise.
          </p>
          <div className={styles.welcomeContent}>
            <h2>Welcome to CLC</h2>
            <p>
              At CLC, we specialize in resolving complex disputes and navigating
              regulatory frameworks with precision and integrity. Our commitment
              to excellence has earned the trust of industry leaders across
              sectors.
            </p>
          </div>
          <div className={styles.heroButtons}>
            <div className={styles.heroButtons}>
              <AnimatedButton variant="contained">
                Schedule a Consultation
              </AnimatedButton>
              <AnimatedButton variant="outlined">
                Explore Our Services
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
