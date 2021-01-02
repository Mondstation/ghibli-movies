import { BrowserRouter } from "react-router-dom";
import HeaderSection from "./components/sections/Header.js";
import PageRoutes from "./pages/Routes.js";
import FooterSection from "./components/sections/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <HeaderSection />
      <PageRoutes />
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
