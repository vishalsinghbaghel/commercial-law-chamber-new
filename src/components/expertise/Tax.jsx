
// import styles from "./Tax.module.css";
// import { motion } from "framer-motion";

// export const Tax = () => {
//   return (
    
//       <main className={styles["Tax-container"]}>
//         <motion.div
//           sx={{
//             maxWidth: "800px",
//             padding: "2rem",
//             borderRadius: "12px",
//             background: "rgba(0, 0, 0, 0.6)",
//             color: "#fff",
//             textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
//           }}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, ease: "easeOut" }}
//         >
//           <div className={styles["Tex-Div"]}>
//             <section className={styles["tax-body"]}>
//               <h1>Direct & Indirect Tax</h1>
//               <h2>Strategic Tax Advisory Across Borders and Sectors</h2>
//               <p>
//                 Our tax practice offers deep, cross-functional expertise in
//                 direct and indirect taxation, international tax structuring, and
//                 customs advisory. We advise on a broad spectrum of tax matters
//                 spanning corporate, commercial, and financial transactions, with
//                 a strong focus on structuring tax-efficient investments and
//                 cross-border operations.
//               </p>
//               <p>
//                 Our team is highly experienced in complex transfer pricing (TP)
//                 issues, including audits, disputes, and treaty interpretation,
//                 as well as customs valuation and classification challenges.
//               </p>
//               <p>
//                 We have successfully guided clients through intricate matters
//                 involving supply chain restructuring, cash flow planning,
//                 invoicing strategies, and investment structuring under DTAAs,
//                 FTAs, and BITs, with India serving as the primary jurisdiction.
//               </p>
//               <p>
//                 Collaborating with a trusted network of accomplished
//                 international tax professionals, we provide seamless advisory on
//                 outward investments from India, ensuring compliance with
//                 evolving global tax norms and treaty obligations.
//               </p>
//             </section>
//           </div>
//         </motion.div>
//       </main>
    
//   );
// };



import styles from "./Tax.module.css";
import { motion } from "framer-motion";

export const Tax = () => {
  return (
    <div className={styles["tax-page"]}>
      {/* Hero Section */}
      <motion.div
        className={styles["hero"]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Direct & Indirect Tax</h1>
        <h3 className={styles["subtitle"]}>
          Strategic Tax Advisory Across Borders and Sectors
        </h3>
      </motion.div>

      {/* Overview */}
      <section className={styles["overview"]}>
        <p>
          Our tax practice offers deep, cross-functional expertise in direct and
          indirect taxation, international tax structuring, and customs
          advisory. We advise on a broad spectrum of tax matters spanning
          corporate, commercial, and financial transactions, with a strong focus
          on structuring tax-efficient investments and cross-border operations.
        </p>
        <p>
          Our team is highly experienced in complex transfer pricing (TP)
          issues, including audits, disputes, and treaty interpretation, as well
          as customs valuation and classification challenges. We have
          successfully guided clients through intricate matters involving supply
          chain restructuring, cash flow planning, invoicing strategies, and
          investment structuring under Double Taxation Avoidance Agreements
          (DTAAs), Free Trade Agreements (FTAs), and Bilateral Investment
          Treaties (BITs), with India serving as the primary jurisdiction.
        </p>
        <p>
          Collaborating with a trusted network of accomplished international tax
          professionals, we provide seamless advisory on outward investments
          from India, ensuring compliance with evolving global tax norms and
          treaty obligations.
        </p>
      </section>

     
      <section className={styles["experience"]}>
        <h2> Select Experience</h2>
        <ul>
          <li>
            Advised the Government of India in a bilateral treaty dispute
            involving retrospective taxation
          </li>
          <li>
            Structured international income tax strategies for multinational
            clients
          </li>
          <li>
            Counseled leading corporations on tax-efficient supply chain
            restructuring
          </li>
          <li>
            Provided guidance on treaty-based trade and tax arrangements,
            including TP and customs frameworks
          </li>
          <li>
            Led advisory on double taxation issues, FTAs, and BITs—including
            cash structuring and invoicing mechanisms
          </li>
          <li>
            Advised on international investment treaty claims involving
            tax-related disputes
          </li>
          <li>
            Provided strategic counsel on service tax implications across
            diverse industry sectors
          </li>
        </ul>
      </section>

    
      <section className={styles["approach"]}>
        <h2> Our Approach</h2>
        <p>
          Our approach is research-intensive, solution-driven, and tailored to
          align with both legal and business objectives—positioning us as a
          trusted partner in high-stakes, cross-border tax matters.
        </p>
      </section>

     
      <div className={styles["cta"]}>
        <button className={styles["cta-button"]}>Request Consultation</button>
      </div>
    </div>
  );
};

