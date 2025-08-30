import { AllRoutes } from "./Routes/AllRoutes";
import "./App.css";
import { Navbar } from "./navbar/Navbar";
import { useEffect, useState } from "react";
import { MobileNavbar } from "./navbar/MobileNavBar";
import { Footer } from "./components/footer/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  console.log(isMobile);
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
