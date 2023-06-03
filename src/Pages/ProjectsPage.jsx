import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import ProjectsList from "../Components/ProjectDetail/ProjectsList";
import { getProjects } from "../Utils/projects";
import logoVernal from "../Assets/Images/logo-vernal-white.svg";
import homeIcon from "../Assets/Images/homeicon.png";

export default function ProjectsPage() {
  const history = useNavigate();
  const historyBack = () => history(-1);

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
    <>
      <section className="ProjectsHeader">
        <div onClick={historyBack} className="ProjectsHeader__BackButton"></div>
        <img src={logoVernal} alt="Logo" className="ProjectsHeader__Logo" />
        <Link to="/vernal-studio">
          <img className="HomeIcon" src={homeIcon} alt="Home"></img>
        </Link>
      </section>
      <div className="ProjectsListContainer">
        <ProjectsList projects={projects} />
      </div>
    </>
  );
}
