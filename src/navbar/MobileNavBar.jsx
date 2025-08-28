import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "/Logo.png";
import styles from "./MobileNavBar.module.css";
import {
  FaAngleDown,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.header}>
        <img src={Logo} alt="CLC Logo" className={styles.logo} />
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.overlay}>
          <nav className={styles.navMenu}>
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <div className={styles.menuItem}>
              <span
                onClick={() => toggleMenu("about")}
                className={styles.dropdownToggle}
              >
                About <FaAngleDown className={styles.icon} />
              </span>
              {activeMenu === "about" && (
                <div className={styles.submenu}>
                  <NavLink
                    to="/about/story"
                    className={styles.sublink}
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Story
                  </NavLink>
                  <NavLink
                    to="/about/team"
                    className={styles.sublink}
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Team
                  </NavLink>
                </div>
              )}
            </div>

            <div className={styles.menuItem}>
              <span
                onClick={() => toggleMenu("expertise")}
                className={styles.dropdownToggle}
              >
                Expertise <FaAngleDown className={styles.icon} />
              </span>
              {activeMenu === "expertise" && (
                <div className={styles.submenu}>
                  <NavLink
                    to="/expertise/tax"
                    className={styles.sublink}
                    onClick={() => setMenuOpen(false)}
                  >
                    Tax
                  </NavLink>
                  <NavLink
                    to="/expertise/telecom"
                    className={styles.sublink}
                    onClick={() => setMenuOpen(false)}
                  >
                    Telecom
                  </NavLink>
                </div>
              )}
            </div>

            <div className={styles.menuItem}>
              <span
                onClick={() => toggleMenu("insights")}
                className={styles.dropdownToggle}
              >
                Insights <FaAngleDown className={styles.icon} />
              </span>
              {activeMenu === "insights" && (
                <div className={styles.submenu}>
                  <NavLink
                    to="/insights/gst"
                    className={styles.sublink}
                    onClick={() => setMenuOpen(false)}
                  >
                    GST Hearing
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/contacts"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </NavLink>
          </nav>

          <div className={styles.socials}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
