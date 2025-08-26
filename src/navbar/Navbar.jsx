import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "/Logo_old.jpg";
import styles from "./Navbar.module.css";
import {
  FaAngleDown,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const navLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={Logo} alt="CLC Logo" />

        <nav className={styles.navigation}>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div className={styles.menuItem} onClick={() => toggleMenu("about")}>
            <span className={`${styles.link} ${styles.withIcon}`}>
              <span>About</span>
              <FaAngleDown className={styles.icon} />
            </span>
            {activeMenu === "about" && (
              <div className={styles.submenu}>
                <NavLink to="/about/ourStory" className={styles.sublink}>
                  Our Story
                </NavLink>
                <NavLink to="/about/team" className={styles.sublink}>
                  Our Team
                </NavLink>
              </div>
            )}
          </div>

          <div
            className={styles.menuItem}
            onClick={() => toggleMenu("expertise")}
          >
            <span className={`${styles.link} ${styles.withIcon}`}>
              <span>Expertise</span>
              <FaAngleDown className={styles.icon} />
            </span>
            {activeMenu === "expertise" && (
              <div className={styles.submenu}>
                <NavLink to="/expertise/tax" className={styles.sublink}>
                  Tax
                </NavLink>
                <NavLink to="/expertise/telecom" className={styles.sublink}>
                  Telecom
                </NavLink>
              </div>
            )}
          </div>

          <div
            className={styles.menuItem}
            onClick={() => toggleMenu("insights")}
          >
            <span className={`${styles.link} ${styles.withIcon}`}>
              <span>Insights</span>
              <FaAngleDown className={styles.icon} />
            </span>
            {activeMenu === "insights" && (
              <div className={styles.submenu}>
                <NavLink to="/insights/gst" className={styles.sublink}>
                  GST Hearing
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contacts" className={navLinkClass}>
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
    </div>
  );
};
