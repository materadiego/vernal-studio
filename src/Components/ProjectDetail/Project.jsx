export default function Project({ ...project }) {
  return (
    <div className="ProjectDetail">
      <img src={project.heroImage} alt={project.projectName}></img>
      <p className="Title">{project.projectName}</p>
      <p className="Text">{project.description}</p>
    </div>
  );
}
