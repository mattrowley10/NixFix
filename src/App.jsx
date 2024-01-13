import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import TopNav from "./Components/TopNav";
import Facials from "./Components/Facials";
import Wax from "./Components/Wax";
import Makeup from "./Components/Makeup";
import ScrollToTop from "./Hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <TopNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facials" element={<Facials />} />
        <Route path="/wax" element={<Wax />} />
        <Route path="/makeup" element={<Makeup />} />
      </Routes>
    </Router>
  );
}

export default App;
