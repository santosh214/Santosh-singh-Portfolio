import "./App.css";
import Navabr from "./components/Navbar/Navabr";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Router>
        <Navabr />
        <Header/>
      </Router>
    </>
  );
}

export default App;
