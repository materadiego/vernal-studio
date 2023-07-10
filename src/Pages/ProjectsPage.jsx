import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsList from "../Components/ProjectDetail/ProjectsList";
import { getProjects } from "../Utils/projects";
import Contact from "../Components/Contact/Contact";
import "../scss/Pages/ProjectTemplate.scss";

export default function ProjectsPage() {
  // const history = useNavigate();
  // const historyBack = () => history(-1);

  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res))
      .catch((error) => console.log(error));
  });

  return (
    <div className="ProjectsListContainer">
      <ProjectsList projects={projects} />
      <Contact />
    </div>
  );
}
