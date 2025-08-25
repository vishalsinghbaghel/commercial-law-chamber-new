import {FaBalanceScale,FaFileAlt,FaChartLine} from "react-icons/fa";
import styles from "./PracticeSection.module.css";

export const PracticeSection = () => {
  return (
    <>
     
      <section className={styles["practice-areas"]}>
        <h2 className={styles["section-title"]}>Core Practice Areas</h2>
        <div className={styles["cards-container"]}>
          <div className={styles["practice-card"]}>
            <div className={styles["icon"]}>
              <FaFileAlt />
            </div>
            <h3>Tax Litigation</h3>
            <p>Expert representation in direct and indirect tax disputes.</p>
          </div>
          <div className={styles["practice-card"]}>
            <div className={styles["icon"]}>
              <FaBalanceScale />
            </div>
            <h3>Commercial Disputes</h3>
            <p>
              Resolving complex business conflicts with strategic precision.
            </p>
          </div>
          <div className={styles["practice-card"]}>
            <div className={styles["icon"]}>
              <FaChartLine />
            </div>
            <h3>Regulatory Advisory</h3>
            <p>Guidance on compliance, licensing, and regulatory frameworks.</p>
          </div>
        </div>
      </section>

    </>
  );
};
