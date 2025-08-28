import "./About.css";
import { motion } from "framer-motion";

export const OurStory = () => {
  return (
    <main className="about-container">
      <motion.div
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          borderRadius: "12px",
          background: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <header className="about-hero">
          <h1>Strategic Legal Excellence in Tax and Commercial Disputes</h1>
          <p>
            Founded in 2008, Commercial Law Chamber is a boutique law practice
            distinguished by its deep specialization in tax advisory and dispute
            resolution. With three seasoned Partners and a team of 15 adept
            associates, we operate through a robust national network of legal
            professionals and expert counsels, ensuring seamless support across
            jurisdictions in India.
          </p>
        </header>

        <section className="about-body">
          <h2>A Legacy of Precision and Advocacy</h2>
          <p>
            Our philosophy is rooted in strategic thinking and rigorous legal
            research—crafting bespoke solutions that not only address legal
            complexities but also align with our clients’ commercial
            imperatives. We are particularly known for our formidable expertise
            in tax litigation, representing clients before the Supreme Court of
            India, various High Courts, and specialized tax tribunals such as
            ITAT, CESTAT, and VAT Tribunals.
          </p>
          <p>
            Our comprehensive practice spans departmental proceedings, GST
            investigations, refund litigation, and trade remedies before DGTR
            and other international forums. With on-ground representation in
            every Indian state capital, our pan-India footprint ensures swift,
            coordinated action and local insight.
          </p>
          <p>
            We are proud of our track record in precedent-setting
            matters—rulings that have shaped jurisprudence on anti-dumping,
            transfer pricing, indirect taxes, and constitutional tax challenges.
          </p>
        </section>
      </motion.div>
    </main>
  );
};
