import "./scss/Styles.scss";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectTemplate from "./Pages/ProjectTemplate";
import ProjectsPage from "./Pages/ProjectsPage";
import ScrollToTop from "./Utils/ScrollToTop";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useRef } from "react";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<HomePage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/approach" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectTemplate />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
