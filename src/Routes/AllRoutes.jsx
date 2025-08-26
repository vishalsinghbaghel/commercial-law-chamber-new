import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { OurStory } from "../components/about/OurStory";
import { Team } from "../components/about/Team";
import { Tax } from "../components/expertise/Tax";
// import { Tax } from "../components/expertise/Tax";
// import { Disputes } from "../components/expertise/Disputes";
 import { Telecom } from "../components/expertise/Telecom";
// import { Agriculture } from "../components/expertise/Agriculture";
// import { Aviation } from "../components/expertise/Aviation";
// import { Pharma } from "../components/expertise/Pharma";
// import { RealEstate } from "../components/expertise/RealEstate";

import { Insights } from "../components/insights/Insights";
// import { TDSRelief } from "../components/insights/TDSRelief";
// import { Insolvency } from "../components/insights/Insolvency";
// import { Insurance } from "../components/insights/Insurance";
// import { GSTHearing } from "../components/insights/GSTHearing";

import { Contact } from "../components/contacts/Contact";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* About Routes */}
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/about/ourStory" element={<OurStory/>} />
      <Route path="/about/Team" element={<Team />} />
      {/* <Route path="/about/approach" element={<OurApproach />} />
      <Route path="/about/values" element={<ValuesVision />} />
      <Route path="/about/location" element={<Location />} /> */}

      {/* Expertise Routes */}
      {/* <Route path="/expertise" element={<Expertise />} /> */}
      <Route path="/expertise/tax" element={<Tax />} />
      <Route path="/expertise/telecom" element={<Telecom />} />
      {/* <Route path="/expertise/disputes" element={<Disputes />} />
      
      <Route path="/expertise/agriculture" element={<Agriculture />} />
      <Route path="/expertise/aviation" element={<Aviation />} />
      <Route path="/expertise/pharma" element={<Pharma />} />
      <Route path="/expertise/realestate" element={<RealEstate />} /> */}

      {/* Insights Routes */}
      <Route path="/insights" element={<Insights />} />
      {/* <Route path="/insights/tds-relief" element={<TDSRelief />} />
      <Route path="/insights/insolvency" element={<Insolvency />} />
      <Route path="/insights/insurance" element={<Insurance />} />
      <Route path="/insights/gst-hearing" element={<GSTHearing />} /> */}

      {/* Contact Route */}
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
};
