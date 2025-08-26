import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Expertise } from "../components/expertise/Expertise";
import { Insights } from "../components/insights/Insights";
import { Contact } from "../components/contacts/Contact";
import { useEffect } from "react";

export const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/expertise/*" element={<Expertise />} />
        <Route path="/insights/*" element={<Insights />} />
        <Route path="/contacts/*" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
};
