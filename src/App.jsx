import { AllRoutes }from "./Routes/AllRoutes"
import "./App.css";
import { Navbar } from "./navbar/Navbar";
// In index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes/>
    </>
  );
}

export default App;
