import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "/Logo.png";
import styles from "./Navbar.module.css";
import { FaAngleDown } from "react-icons/fa";

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
                <NavLink to="/expertise/disputes" className={styles.sublink}>
                  Disputes
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/insights"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Insights
          </NavLink>

          <NavLink to="/contacts" className={navLinkClass}>
            Contacts
          </NavLink>
        </nav>

        <div className={styles.socials}>
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/image/insta.jpg" className={styles["insta"]} />
          </a>
        </div>
      </div>
    </div>
  );
};
