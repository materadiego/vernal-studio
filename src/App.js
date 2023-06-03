import "./scss/Styles.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectTemplate from "./Pages/ProjectTemplate";
import ProjectsPage from "./Pages/ProjectsPage";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/vernal-studio" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectTemplate />} />
        </Routes>
        <Contact />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
