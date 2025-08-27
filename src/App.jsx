import { AllRoutes }from "./Routes/AllRoutes"
import "./App.css";
import { Navbar } from "./navbar/Navbar";
// In index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </>
  );
}

export default App;
