import ProjectsList from "../Components/ProjectDetail/ProjectsList";
import Contact from "../Components/Contact/Contact";
import "../scss/Pages/ProjectTemplate.scss";

export default function ProjectsPage() {
  return (
    <div className="ProjectsListContainer">
      <ProjectsList />
      <Contact />
    </div>
  );
}
