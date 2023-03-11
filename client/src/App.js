import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    alert(
      "NOTE: This app is currently undergoing a rebuild and work is in progress. Some features might not be available."
    );
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
