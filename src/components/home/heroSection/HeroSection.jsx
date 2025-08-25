import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={styles["container"]}>
      <section className={styles["hero-container"]}>
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            Leading Law Firm for Tax & Commercial Litigation
          </h1>
          <p className={styles["hero-subtitle"]}>
            Trusted by industry leaders for high-stakes disputes and regulatory
            expertise.
          </p>
          <div className={styles["hero-buttons"]}>
            <button className={styles["btn-primary"]}>
              Schedule a Consultation
            </button>
            <button className={styles["btn-secondary"]}>
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      <section className={styles["welcome-section"]}>
        <div className={styles["welcome-content"]}>
          <h2>Welcome to CLC</h2>
          <p>
            At CLC, we specialize in resolving complex disputes and navigating
            regulatory frameworks with precision and integrity. Our commitment
            to excellence has earned the trust of industry leaders across
            sectors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
