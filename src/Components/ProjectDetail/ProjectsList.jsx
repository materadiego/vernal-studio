import ProjectPreview from "./ProjectPreview";

export default function ProjectsList({ projects }) {
  return (
    <>
      <p className="ProjectsList--Title Title">Proyectos</p>

      {projects.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      ))}
    </>
  );
}
