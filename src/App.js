import "./App.css";
import Navabr from "./components/Navbar/Navabr";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/NotFound/Notfound";
function App() {
  return (
    <>
      <Router>
        <Navabr />
        <Routes>
          <Route path="/about-us" element={<About />} />
          <Route  path="/"  element={<Header />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
