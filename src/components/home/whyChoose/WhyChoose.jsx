import {FaBriefcase,FaStar, FaUserTie,} from "react-icons/fa";
import styles from "./WhyChoose.module.css";

export const WhyChoose = () => {
  return (
    <>
      <section className={styles["why-clc"]}>
        <h2 className={styles["section-title"]}>Why Choose CLC</h2>
        <div className={styles["cards-container"]}>
          <div className={styles["highlight-card"]}>
            <div className={styles["icon"]}>
              <FaBriefcase />
            </div>
            <h3>25+ Years of Experience</h3>
            <p>Trusted legal advisors with decades of courtroom expertise.</p>
          </div>
          <div className={styles["highlight-card"]}>
            <div className={styles["icon"]}>
              <FaStar />
            </div>
            <h3>100+ Notable Cases</h3>
            <p>
              Proven track record in high-stakes litigation and arbitration.
            </p>
          </div>
          <div className={styles["highlight-card"]}>
            <div className={styles["icon"]}>
              <FaUserTie />
            </div>
            <h3>Client-Centric Approach</h3>
            <p>Strategic counsel tailored to each client’s unique needs.</p>
          </div>
        </div>
      </section>

     
    </>
  );
};
