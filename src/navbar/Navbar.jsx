import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "/Logo.jpg";
import "./Navbar.css";
import { FaAngleDown } from "react-icons/fa";

export const Navbar = () => {
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  return (
    <div className="container">
      <div className="navbar">
        <img className="logo" src={Logo} alt="CLC Logo" />

        <nav className="navigation">
          <NavLink to="/" className="link">
            Home
          </NavLink>

          <div className="menu-item" onClick={() => setAboutOpen(!aboutOpen)}>
            <span className="link with-icon">
              <span>About</span>
              <FaAngleDown className="icon" />
            </span>
            {aboutOpen && (
              <div className="submenu">
                <NavLink to="/about/story" className="sublink">
                  Our Story
                </NavLink>
                <NavLink to="/about/team" className="sublink">
                  Our Team
                </NavLink>
                <NavLink to="/about/approach" className="sublink">
                  Our Approach
                </NavLink>
                <NavLink to="/about/values" className="sublink">
                  Values & Vision
                </NavLink>
                <NavLink to="/about/location" className="sublink">
                  Office & Infrastructure
                </NavLink>
              </div>
            )}
          </div>

          <div
            className="menu-item"
            onClick={() => setExpertiseOpen(!expertiseOpen)}
          >
            <span className="link with-icon">
              <span>Expertise</span>
              <FaAngleDown className="icon" />
            </span>
            {expertiseOpen && (
              <div className="submenu">
                <NavLink to="/expertise/tax" className="sublink">
                  Direct & Indirect Tax
                </NavLink>
                <NavLink to="/expertise/disputes" className="sublink">
                  Regulatory & Commercial Disputes
                </NavLink>
                <NavLink to="/expertise/telecom" className="sublink">
                  Telecom, Media & Technology
                </NavLink>
                <NavLink to="/expertise/agriculture" className="sublink">
                  Agriculture & Agro-Sciences
                </NavLink>
                <NavLink to="/expertise/aviation" className="sublink">
                  Aviation & Defense
                </NavLink>
                <NavLink to="/expertise/pharma" className="sublink">
                  Pharmaceuticals & Healthcare
                </NavLink>
                <NavLink to="/expertise/realestate" className="sublink">
                  Real Estate
                </NavLink>
              </div>
            )}
          </div>

          <div
            className="menu-item"
            onClick={() => setInsightsOpen(!insightsOpen)}
          >
            <span className="link with-icon">
              <span>Insights</span>
              <FaAngleDown className="icon" />
            </span>
            {insightsOpen && (
              <div className="submenu">
                <NavLink to="/insights/tds-relief" className="sublink">
                  TDS Prosecution Relief
                </NavLink>
                <NavLink to="/insights/insolvency" className="sublink">
                  Insolvency Petition
                </NavLink>
                <NavLink to="/insights/insurance" className="sublink">
                  Insurer Oversight Case
                </NavLink>
                <NavLink to="/insights/gst-hearing" className="sublink">
                  GST Defaulter Hearing
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contacts" className="link">
            Contacts
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
