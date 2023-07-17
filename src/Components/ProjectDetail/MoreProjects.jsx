import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MoreProjects() {
  const { id } = useParams();
  console.log(id);

  function nextPorjectRoute(projectId) {
    const idNumber = Number(projectId);
    const nextProject = idNumber + 1;
    const nextRoute = `/projects/${nextProject}`;
    const projectOne = `/projects/1`;
    if (idNumber === 7) {
      return projectOne;
    } else {
      return nextRoute;
    }
  }

  return (
    <div className="MoreProjectsContainer">
      <p className="MoreProjectsContainer__Text Title">¿Querés ver más?</p>
      {/* MORE BUTTON */}
      <Link
        to={nextPorjectRoute(id)}
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
