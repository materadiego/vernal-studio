import { Link } from "react-router-dom";

export default function ProjectPreview({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="ProjectList-ProjectLink">
      <div className="ProjectList-Project">
        <img
          src={project.imgPreview}
          alt={project.projectName}
          className="ProjectList-Project__Image"
        ></img>
        <p className="ProjectList-Project__Title Title">
          {project.projectName}
        </p>
        <p className="ProjectList-Project__Text Text">{project.location}</p>
      </div>
    </Link>
  );
}
