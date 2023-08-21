import ProjectPreview from "./ProjectPreview";

export default function ProjectsList({ projects }) {
  return (
    <>
      <h2 className="Projects-SectionTitle SectionTitle Projects-SectionTitle-Animation ">
        <span className="SectionTitle__Circle"></span> Proyectos
      </h2>
      <h3 className="ProjectsList--Title ProjectsList--Title1 Span-Animation Title-BigFont Title Mobile">
        <span className="Span-Animation-Block"></span>
        Conocé las
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title2 Span-Animation Title-BigFont Title Mobile">
        <span className="Span-Animation-Block"></span>
        marcas que
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title3 Span-Animation Title-BigFont Title Mobile">
        <span className="Span-Animation-Block"></span>
        transformamos.
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title1 Span-Animation Title-BigFont Title Desktop">
        <span className="Span-Animation-Block"></span>
        Conocé las marcas que
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title2 Span-Animation Title-BigFont Title Desktop">
        <span className="Span-Animation-Block"></span>
        transformamos.
      </h3>
      <div className="ProjectsList-Categories ProjectsList-Categories-Animation">
        <div className="ProjectsList-Categories__Container">
          <p className="ProjectsList-Categories__Container--Category">Todas</p>
          <p className="ProjectsList-Categories__Container--Number">20</p>
        </div>
        <div className="ProjectsList-Categories__Container">
          <p className="ProjectsList-Categories__Container--Category">
            Branding
          </p>
          <p className="ProjectsList-Categories__Container--Number">20</p>
        </div>
        <div className="ProjectsList-Categories__Container">
          <p className="ProjectsList-Categories__Container--Category">
            Web & Ecommerce
          </p>
          <p className="ProjectsList-Categories__Container--Number">20</p>
        </div>
        <div className="ProjectsList-Categories__Container">
          <p className="ProjectsList-Categories__Container--Category">Apps</p>
          <p className="ProjectsList-Categories__Container--Number">20</p>
        </div>
      </div>
      <div className="ProjectList-Contaier ProjectList-Contaier-Animation">
        {projects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
