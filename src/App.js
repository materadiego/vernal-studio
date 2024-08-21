import "./scss/Styles.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import ProjectTemplate from "./Pages/ProjectTemplate";
import ProjectsPage from "./Pages/ProjectsPage";
import ScrollToTop from "./Utils/ScrollToTop";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [langEn, setLangEn] = useState(false);

  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <NavBar langEn={langEn} setLangEn={setLangEn} />
        <Routes>
          <Route path="/" element={<HomePage langEn={langEn} />} />
          <Route path="/about-us" element={<HomePage langEn={langEn} />} />
          <Route path="/services" element={<HomePage langEn={langEn} />} />
          <Route path="/contact" element={<HomePage langEn={langEn} />} />
          <Route path="/approach" element={<HomePage langEn={langEn} />} />
          <Route path="/projects" element={<ProjectsPage langEn={langEn} />} />
          <Route
            path="/projects/:route"
            element={<ProjectTemplate langEn={langEn} />}
          />
        </Routes>
        <Footer langEn={langEn} />
      </HashRouter>
    </div>
  );
}

export default App;
