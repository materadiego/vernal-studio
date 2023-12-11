import ProjectsList from "../Components/ProjectDetail/ProjectsList";
import Contact from "../Components/Contact/Contact";
import "../scss/Pages/ProjectTemplate.scss";
import ScrollToTop from "../Utils/ScrollToTop";

export default function ProjectsPage() {
  ScrollToTop();
  return (
    <div className="ProjectsListContainer">
      <ProjectsList />
      <Contact />
    </div>
  );
}
