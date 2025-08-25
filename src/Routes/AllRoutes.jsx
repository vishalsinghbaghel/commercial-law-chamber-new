import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home"
import { About } from "../components/about/About"
import { Expertise } from "../components/expertise/Expertise"
import { Insights } from "../components/insights/Insights"
import {Contact} from "../components/contacts/Contact"
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />}/>
        <Route path="/insights" element={<Insights />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </>
  );
};
