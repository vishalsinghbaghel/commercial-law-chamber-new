import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h2>CLC Law Firm</h2>
          <p>Resolving complex disputes with precision and integrity.</p>
        </div>

        <div className={styles.navLinks}>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
        </div>

        <div className={styles.contact}>
          <p>Email: info@clcfirm.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} CLC Law Firm. All rights reserved.</p>
      </div>
    </footer>
  );
};
