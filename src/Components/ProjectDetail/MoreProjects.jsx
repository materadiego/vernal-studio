import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjects } from "../../Utils/projects";
export default function MoreProjects({ setMore }) {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res))
      .catch((error) => console.log(error));
  });

  function nextPorjectRoute(projectId) {
    const idNumber = Number(projectId);
    const nextProject = idNumber + 1;
    const nextRoute = `/projects/${nextProject}`;
    const projectOne = `/projects/1`;
    if (idNumber === projects.length) {
      return projectOne;
    } else {
      return nextRoute;
    }
  }

  return (
    <div className="MoreProjectsContainer">
      <p className="MoreProjectsContainer__Text Title Title-MediumFont">
        ¿Querés ver más?
      </p>
      {/* MORE BUTTON */}
      <Link
        to={nextPorjectRoute(id)}
        onClick={() => setMore(false)}
        className="MoreProjectsContainer__MoreButton Button "
      >
        <div className="MoreProjectsContainer__MoreButton--Arrow Button-Arrow"></div>
        <p className="MoreProjectsContainer__MoreButton--Text Button-Text">
          SIGUIENTE PROYECTO
        </p>
      </Link>
    </div>
  );
}
