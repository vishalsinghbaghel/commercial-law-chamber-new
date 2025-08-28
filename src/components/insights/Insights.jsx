import React from "react";
import styles from "./Insights.module.css";


const insightsData = [
  {
    category: "Blogs",
    title: "New Income Tax Bill 2025: Key Reforms & Implications",
    description:
      "Explore how the revamped tax code affects individuals, startups, and corporations. Includes regime comparisons and expert commentary.",
  },
  {
    category: "News",
    title: "CBDT Issues Clarification on TDS for Freelancers",
    description:
      "Recent circular outlines thresholds and compliance requirements for gig economy professionals.",
  },
  {
    category: "Case Laws",
    title: "Allahabad HC Grants Interim Relief in TDS Prosecution",
    description:
      "Court distinguishes between procedural lapses and wilful evasion under Section 276B. A precedent-setting decision.",
  },
  {
    category: "Blogs",
    title: "Taxing Online Gaming Winnings: What You Need to Know",
    description:
      "A deep dive into new TDS rules for gaming platforms and players. Includes compliance tips and legal risks.",
  },
];

export const Insights = () => {
  return (
    <div className={styles["insights-container"]}>
      <header className={styles["insights-header"]}>
        <h1>📊 Insights</h1>
        <p>Blogs | News | Case Laws Update</p>
        <p className={styles["tagline"]}>
          Stay informed with trending topics in taxation
        </p>
      </header>

      <div className={styles["insights-grid"]}>
        {insightsData.map((item, index) => (
          <div key={index} className={styles["insight-card"]}>
            <span className={`badge ${item.category.toLowerCase()}`}>
              {item.category}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className={styles["read-more"]}>Read More</button>
          </div>
        ))}
          </div>
          
    </div>
  );
};


