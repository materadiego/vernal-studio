import project1 from "../../Assets/Images/project1.png";
import project2 from "../../Assets/Images/project1.png";
import project3 from "../../Assets/Images/project1.png";
import project4 from "../../Assets/Images/project1.png";

export default function ProjectPreview({ project }) {
  console.log(project);
  return (
    <div className="ProjectList-Project">
      <img
        src={project.imgPreview}
        alt={project.projectName}
        className="ProjectList-Project__Image"
      ></img>
      <p className="ProjectList-Project__Title Title">{project.projectName}</p>
      <p className="ProjectList-Project__Text Text">{project.location}</p>
    </div>
  );
}
