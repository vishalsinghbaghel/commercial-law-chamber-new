import {FaPenFancy} from "react-icons/fa";
import styles from "./RecentInsight.module.css";

export const RecentInsights = () => {
  return (
    <>
   
      <section className={styles["recent-insights"]}>
        <h2 className={styles["section-title"]}>Recent Insights</h2>
        <div className={styles["cards-container"]}>
          <div className={styles["insight-card"]}>
            <div className={styles["icon"]}>
              <FaPenFancy />
            </div>
            <h3>Decoding GST Litigation Trends</h3>
            <p>
              A deep dive into emerging patterns in indirect tax disputes and
              how businesses can stay ahead.
            </p>
            <a href="/blog/gst-litigation-trends" className={styles["read-more"]}>
              Read More →
            </a>
          </div>
          <div className={styles["insight-card"]}>
            <div className={styles["icon"]}>
              <FaPenFancy />
            </div>
            <h3>Arbitration vs. Litigation: What Works Best?</h3>
            <p>
              Exploring the pros and cons of dispute resolution mechanisms in
              commercial contracts.
            </p>
            <a href="/blog/arbitration-vs-litigation" className={styles["read-more"]}>
              Read More →
            </a>
          </div>
          <div className={styles["insight-card"]}>
            <div className={styles["icon"]}>
              <FaPenFancy />
            </div>
            <h3>Regulatory Compliance in 2025</h3>
            <p>
              Key updates in licensing and compliance frameworks every company
              should know.
            </p>
            <a href="/blog/regulatory-compliance-2025" className={styles["read-more"]}>
              Read More →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
