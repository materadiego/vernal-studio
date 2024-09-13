import { Link } from "react-router-dom";

export default function ProjectPreview({ project, langEn }) {
  return (
    <Link to={`/projects/${project.route}`} className="ProjectList-ProjectLink">
      <div className="ProjectList-Project">
        <div className="ProjectList-Project__Image">
          <img src={project.imgPreview} alt={project.projectName}></img>
        </div>
        <p className="ProjectList-Project__Title  Title">
          {project.projectName}
        </p>
        <p className="ProjectList-Project__Text Text">
          {langEn ? project.locationEn : project.locationEs}
        </p>
      </div>
    </Link>
  );
}
