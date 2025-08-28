import React from "react";
import styles from "./TDSReliefBlog.module.css";

export const TDSReliefBlog = () => {
  return (
    <div className={styles["blog-wrapper"]}>
      <header className={styles["blog-header"]}>
        <h1>🧾 Interim Relief Granted in TDS Prosecution</h1>
        <p className={styles["subtitle"]}>A Notable Decision by Allahabad High Court</p>
      </header>

      <main className={styles["blog-content"]}>
        <section>
          <h2>📌 Introduction</h2>
          <p>
            In a significant development in the realm of tax litigation, the
            Hon’ble High Court of Allahabad has granted interim relief to two
            applicants in a case concerning delayed deposit of Tax Deducted at
            Source (TDS). The decision is noteworthy for its interpretation of
            Section 276B of the Income Tax Act, especially in situations where
            tax liabilities, although paid late, are regularized with interest
            and penalty.
          </p>
          <p>
            This case highlights a growing judicial inclination to distinguish
            between deliberate tax evasion and procedural lapses that are later
            rectified.
          </p>
        </section>

        <section>
          <h2>📚 Background of the Case</h2>
          <p>
            The matter pertains to the Financial Year 2018–19, during which the
            applicants, including Mr. Geetamber Anand (Director), were alleged
            to have defaulted in depositing TDS within the prescribed time.
            However, the tax dues were eventually paid along with interest and
            penalty, which, according to the applicants, removes the element of
            “wilful failure” to pay tax as required under Section 276B of the
            Income Tax Act, 1961.
          </p>
        </section>

        <section>
          <h2>⚖️ Arguments and Legal Position</h2>
          <p>
            The applicants, represented by Mr. Vivek Sarin, argued that the mere
            delay in depositing TDS—when subsequently regularized—should not
            trigger prosecution under Section 276B. They emphasized that the
            legislative intent behind the provision is to penalize wilful and
            deliberate non-payment of tax, not cases where there is no intent to
            evade.
          </p>
          <p>
            In support of their contention, they cited the Bombay High Court’s
            ruling in{" "}
            <em>Hemant Mahipatray Shah & Anr. v. Anand Upadhyay & Anr.</em>,
            2024 SCC OnLine Bom 2618.
          </p>
        </section>

        <section>
          <h2>📝 Court’s Observation and Interim Relief</h2>
          <p>
            The Hon’ble Allahabad High Court issued notice to the Union of
            India, represented by Mr. Ashish Agrawal, who sought time to file a
            counter affidavit. The matter is now listed for further hearing on
            9th July 2025.
          </p>
          <p>
            Importantly, the Court has stayed the ongoing proceedings before the
            trial court in the interim, offering much-needed relief to the
            applicants and setting a persuasive precedent for similar matters.
          </p>
        </section>

        <section>
          <h2>✅ Conclusion</h2>
          <p>
            The Allahabad High Court’s interim relief is a welcome move that
            brings clarity to how technical non-compliance with TDS timelines
            should be treated, especially when accompanied by subsequent
            corrective measures. It reflects a judicious approach that balances
            enforcement with fairness and is likely to influence similar cases
            going forward.
          </p>
        </section>

        <div className={styles["download-section"]}>
          <p>📄 Read the full order:</p>
          <button className={styles["download-btn"]}>Download Order</button>
        </div>
      </main>
    </div>
  );
};

