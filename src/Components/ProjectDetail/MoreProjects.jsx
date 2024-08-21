import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProject, getProjects } from "../../Utils/projects";

export default function MoreProjects({ setMore, langEn }) {
  const { route } = useParams();
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);
  const [nextRoute, setNextRoute] = useState(`/projects`);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res))
      .catch((error) => console.log(error));
    getProject(route)
      .then((res) => setProject(res))
      .then((res) => {
        const nextId = project.id === projects.length ? 1 : project.id + 1;
        const nextProject = projects.find((project) => project.id === nextId);
        setNextRoute(`/projects/${nextProject.route}`);
      })
      .catch((error) => console.log(error));
  });

  function goToNextProject() {
    window.scrollTo(0, 0);
    setMore(false);
  }

  return (
    <div className="MoreProjectsContainer">
      <p className="MoreProjectsContainer__Text Title Title-MediumFont">
        {langEn ? "Do you want to see more?" : " ¿Querés ver más?"}
      </p>
      {/* MORE BUTTON */}
      <Link
        to={nextRoute}
        onClick={() => goToNextProject()}
        className={`MoreProjectsContainer__MoreButton Button ${
          !projects && "disabled"
        }`}
      >
        <div className="MoreProjectsContainer__MoreButton--Arrow Button-Arrow"></div>
        <p className="MoreProjectsContainer__MoreButton--Text Button-Text">
          {langEn ? "Next Project" : "SIGUIENTE PROYECTO"}
        </p>
      </Link>
    </div>
  );
}
