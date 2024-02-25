import { Link } from "react-router-dom";

export default function ProjectPreview({ project }) {
  return (
    <Link to={`/projects/${project.route}`} className="ProjectList-ProjectLink">
      <div className="ProjectList-Project">
        <div className="ProjectList-Project__Image">
          <img src={project.imgPreview} alt={project.projectName}></img>
        </div>
        <p className="ProjectList-Project__Title  Title">
          {project.projectName}
        </p>
        <p className="ProjectList-Project__Text Text">{project.location}</p>
      </div>
    </Link>
  );
}
