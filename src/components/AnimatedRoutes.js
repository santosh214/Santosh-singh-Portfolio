import React from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Notfound from '../components/NotFound/Notfound'
import {AnimatePresence} from 'framer-motion'
export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Header />} />

      <Route path="/about-us" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </AnimatePresence>
  );
}
