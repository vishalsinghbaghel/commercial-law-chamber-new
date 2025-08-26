import { AllRoutes } from "./Routes/AllRoutes";
import "./App.css";
import { Navbar } from "./navbar/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AllRoutes />
      <ScrollToTop />
    </>
  );
}

export default App;
