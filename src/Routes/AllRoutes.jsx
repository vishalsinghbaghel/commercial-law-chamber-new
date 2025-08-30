import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { OurStory } from "../components/about/OurStory";
import { Team } from "../components/about/Team";
import { Tax } from "../components/expertise/Tax";
// import { Tax } from "../components/expertise/Tax";
// import { Disputes } from "../components/expertise/Disputes";
import { Disputes } from "../components/expertise/Disputes";
// import { Agriculture } from "../components/expertise/Agriculture";
// import { Aviation } from "../components/expertise/Aviation";
// import { Pharma } from "../components/expertise/Pharma";
// import { RealEstate } from "../components/expertise/RealEstate";

import { Insights } from "../components/insights/Insights";
import { TDSReliefBlog } from "../components/insights/TDSReliefBlog";
import { NCLTBlog } from "../components/insights/NCLTBlog";
import { NCDRCCasePage } from "../components/insights/NCDRCCasePage";
import { GSTCasePage } from "../components/insights/GSTCasePage";

import { Contact } from "../components/contacts/Contact";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* About Routes */}
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/about/ourStory" element={<OurStory />} />
      <Route path="/about/Team" element={<Team />} />
      {/* <Route path="/about/approach" element={<OurApproach />} />
      <Route path="/about/values" element={<ValuesVision />} />
      <Route path="/about/location" element={<Location />} /> */}
      {/* Expertise Routes */}
      {/* <Route path="/expertise" element={<Expertise />} /> */}
      <Route path="/expertise/tax" element={<Tax />} />
      <Route path="/expertise/disputes" element={<Disputes />} />
      {/*<Route path="/expertise/telecom" element={<Telecom />} />
      <Route path="/expertise/agriculture" element={<Agriculture />} />
      <Route path="/expertise/aviation" element={<Aviation />} />
      <Route path="/expertise/pharma" element={<Pharma />} />
      <Route path="/expertise/realestate" element={<RealEstate />} /> */}
      {/* Insights Routes */}
      <Route path="/insights" element={<Insights />} />
      <Route
        path="/insights/income-tax-bill-2025"
        element={<TDSReliefBlog />}
      />
      <Route
        path="/insights/tds-freelancers-clarification"
        element={<NCLTBlog />}
      />
      <Route
        path="/insights/allahabad-hc-tds-relief"
        element={<NCDRCCasePage />}
      />
      <Route
        path="/insights/online-gaming-taxation"
        element={<GSTCasePage />}
      />
      {/* Contact Route */}
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
};
