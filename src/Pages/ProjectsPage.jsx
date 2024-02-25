import ProjectsList from "../Components/ProjectDetail/ProjectsList";
import Contact from "../Components/Contact/Contact";
import "../scss/Pages/ProjectTemplate.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ProjectsPage() {
  let location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ProjectsListContainer">
      <ProjectsList />
      <Contact />
    </div>
  );
}
