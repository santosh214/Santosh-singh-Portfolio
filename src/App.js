import "./App.css";
import Navabr from "./components/Navbar/Navabr";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Router>
        <Navabr />
        <Routes>
          <Route path="/about-us" element={<About />} />
        </Routes>{" "}
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
