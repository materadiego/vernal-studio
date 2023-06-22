import { useState } from "react";
import { getProject } from "../Utils/projects";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import MoreProjects from "../Components/ProjectDetail/MoreProjects";
import Project from "../Components/ProjectDetail/Project";
import "../scss/Pages/ProjectTemplate.scss";
import logoVernal from "../Assets/Images/logo-vernal-white.svg";
import homeIcon from "../Assets/Images/homeicon.png";
import projectsIcon from "../Assets/Images/projectsicon.png";

export default function ProjectTemplate() {
  const history = useNavigate();
  const historyBack = () => {
    history(-1);
  };

  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProject(id).then((res) => {
      setProject(res);
    });
  });

  return (
    <div className="ProjectTemplate">
      <section className="ProjectsHeader">
        <div onClick={historyBack} className="ProjectsHeader__BackButton"></div>
        <img src={logoVernal} alt="Logo" className="ProjectsHeader__Logo" />

        <Link to="/home" className="ProjectsHeader__HomeButton">
          <img className="HomeIcon" src={homeIcon} alt="Home"></img>
        </Link>
        <Link to="/projects" className="ProjectsHeader__ProjectsButton">
          <img className="ProjectsIcon" src={projectsIcon} alt="Home"></img>
        </Link>
      </section>
      <Project {...project} />
      <MoreProjects {...project} />
    </div>
  );
}
