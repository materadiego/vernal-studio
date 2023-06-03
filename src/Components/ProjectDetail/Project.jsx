export default function Project({ ...project }) {
  return (
    <div className="ProjectDetail">
      <img
        src={project.heroImage}
        alt={project.projectName}
        className="ProjectDetail__Image"
      ></img>
      <p className="ProjectDetail__Title Title">{project.projectName}</p>
      <p className="ProjectDetail__Text Text">{project.description}</p>
    </div>
  );
}
