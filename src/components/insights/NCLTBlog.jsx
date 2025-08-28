import React from "react";
import styles from"./NCLTBlog.module.css";

export const NCLTBlog = () => {
  return (
    <div className={styles["blog-container"]}>
      <header className={styles["blog-header"]}>
        <h1>NCLT Admits Insolvency Petition for Default in Operational Debt</h1>
        <p className={styles["blog-subtitle"]}>
          Blog No. 2 • Corporate Insolvency • IBC Update
        </p>
      </header>

      <section className={styles["blog-section"]}>
        <h2>📜 Background</h2>
        <p>
          A petition under Section 9 of the Insolvency and Bankruptcy Code, 2016
          was filed seeking initiation of the Corporate Insolvency Resolution
          Process (CIRP) against a corporate debtor for default in repayment of
          operational dues amounting to over ₹11 crore. The claim arose from
          unpaid invoices for supply of goods and fabrication services rendered
          between 2014 and 2018.
        </p>
        <p>
          Despite repeated follow-ups, the dues remained unpaid. A statutory
          demand notice under Section 8 was issued on 26.02.2020, which received
          no response or dispute. The case was initially dismissed due to an
          ongoing CIRP but was later restored after its withdrawal.
        </p>
      </section>

      <section className={styles["blog-section"]}>
        <h2>🧾 Arguments</h2>
        <p>
          The operational creditor presented email correspondences and a
          corporate guarantee dated 18.08.2017 acknowledging the debt. No
          payments or disputes were raised by the debtor. The claim exceeded the
          ₹1 crore threshold under Section 4 of the IBC, making the petition
          maintainable.
        </p>
      </section>

      <section className={styles["blog-section"]}>
        <h2>✅ Conclusion</h2>
        <p>
          The Tribunal found the operational debt valid and undisputed.
          Statutory conditions under Section 9 were met, and CIRP was initiated
          with a moratorium under Section 14. This case highlights the
          importance of debt acknowledgment and timely statutory responses under
          the IBC.
        </p>
      </section>

      <div className={styles["download-section"]}>
        <h3>📄 Read the Complete Order</h3>
        <button className={styles["download-button"]}>Download Order</button>
      </div>
    </div>
  );
};


