import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";

import { OurStory } from "../components/about/OurStory";
import { Team } from "../components/about/Team";
import { Review } from "../components/about/Review";
import { FAQ } from "../components/about/FAQ";

import { Tax } from "../components/expertise/Tax";
import { Disputes } from "../components/expertise/Disputes";


import { Insights } from "../components/insights/Insights";
import { TDSReliefBlog } from "../components/insights/TDSReliefBlog";
import { NCLTBlog } from "../components/insights/NCLTBlog";
import { NCDRCCasePage } from "../components/insights/NCDRCCasePage";
import { GSTCasePage } from "../components/insights/GSTCasePage";

import { Contact } from "../components/contacts/Contact";
import { CareerPage } from "../components/career/Career";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/about/ourStory" element={<OurStory />} />
      <Route path="/about/Team" element={<Team />} />
       <Route path="/about/Review" element={ <Review/>}/>
      <Route path="/about/FAQ" element={<FAQ/>} />
    
      <Route path="/expertise/tax" element={<Tax />} />
      <Route path="/expertise/disputes" element={<Disputes />} />
       
      

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

      <Route path="/careers" element={<CareerPage />} />

     
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
};
