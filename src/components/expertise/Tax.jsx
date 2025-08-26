import styles from "./Tax.module.css";

export const Tax = () => {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <img
          src="https://copilot.microsoft.com/th/id/BCO.03453bef-d848-4e99-8582-f02cd930478c.png"
          alt="Strategic Tax Advisory"
          className={styles.image}
        />
        <div className={styles.content}>
          <h1>Direct & Indirect Tax</h1>
          <h2>Strategic Tax Advisory Across Borders and Sectors</h2>
          <p>
            Our tax practice offers deep, cross-functional expertise in direct
            and indirect taxation, international tax structuring, and customs
            advisory. We advise on a broad spectrum of tax matters spanning
            corporate, commercial, and financial transactions, with a strong
            focus on structuring tax-efficient investments and cross-border
            operations.
          </p>
          <p>
            Our team is highly experienced in complex transfer pricing (TP)
            issues, including audits, disputes, and treaty interpretation, as
            well as customs valuation and classification challenges.
          </p>
          <p>
            We have successfully guided clients through intricate matters
            involving supply chain restructuring, cash flow planning, invoicing
            strategies, and investment structuring under DTAAs, FTAs, and BITs,
            with India serving as the primary jurisdiction.
          </p>
          <p>
            Collaborating with a trusted network of accomplished international
            tax professionals, we provide seamless advisory on outward
            investments from India, ensuring compliance with evolving global tax
            norms and treaty obligations.
          </p>
        </div>
      </div>
    </section>
  );
};


