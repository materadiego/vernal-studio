import ProjectPreview from "./ProjectPreview";

export default function ProjectsList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      ))}
    </>
  );
}
