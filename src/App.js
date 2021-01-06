import { HashRouter } from "react-router-dom";
import HeaderSection from "./components/sections/Header.js";
import PageRoutes from "./pages/Routes.js";
import FooterSection from "./components/sections/Footer.js";

function App() {
  return (
    <HashRouter basename="/">
      <HeaderSection />
      <PageRoutes />
      <FooterSection />
    </HashRouter>
  );
}

export default App;
