import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Left Section - Brand */}
        <div className={styles.brand}>
          <h2>Commercial Law CHAMBER</h2>
          <p>
            Empowering clients with advanced legal expertise in tax and <br />
            commercial litigation to improve case outcomes and business success.
          </p>
          <div className={styles.socialIcons}>
            <a
              className={styles["linkedin"]}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/linkedin.jpg" className={styles["linkedin"]} />
            </a>

            <a
              className={styles["twitter"]}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/twitter.jpg" className={styles["twitter"]} />
            </a>

            <a
              className={styles["insta"]}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/insta.jpg" className={styles["insta"]} />
            </a>
          </div>
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            BACK TO TOP
          </button>
        </div>

        {/* Middle Section - Site Map */}
        <div className={styles.links}>
          <h3>Site Map</h3>
          <Link to="/about/ourStory">About OurStory</Link>
          <Link to="/about/Team">About OurTeam</Link>

          <Link to="/expertise/tax">Expertise Tax</Link>
          <Link to="/expertise/disputes">Expertise Disputes</Link>

          <Link to="/insights">Resources & News</Link>

          <Link to="/careers">Careers</Link>

          <Link to="/contacts">Contact Us</Link>
        </div>

        {/* Right Section - Legal */}
        <div className={styles.links}>
          <h3>Legal</h3>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/lawyers-corner">Lawyer’s Corner</Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Commercial Law Chamber. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
