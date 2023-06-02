import { useEffect, useState } from "react";
import ProjectsList from "../Components/ProjectDetail/ProjectsList";
import { getProjects } from "../Utils/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res))
      .catch((error) => console.log(error));
  });
  return (
    <div className="ProjectsListContainer">
      <ProjectsList projects={projects} />
    </div>
  );
}
