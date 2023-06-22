import ProjectPreview from "./ProjectPreview";
import TitleLine from "../../Assets/Images/sectiontitle-line.svg";

export default function ProjectsList({ projects }) {
  return (
    <>
      <h2 className="Projects-SectionTitle SectionTitle">
        Proyectos <img src={TitleLine} alt="Icon"></img>
      </h2>
      <h3 className="ProjectsList--Title Title">
        Conocé las marcas que transformamos.
      </h3>
      <div className="ProjectsList-Categories">
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
      {projects.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      ))}
    </>
  );
}
