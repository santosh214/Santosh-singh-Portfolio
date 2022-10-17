import "./App.css";
import Navabr from "./components/Navbar/Navabr";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  return (
    <>
      <Router>
        <Navabr />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
