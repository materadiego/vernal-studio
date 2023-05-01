import TitleLine from "../../Assets/Images/sectiontitle-line.svg";
import LoopBg from "../../Assets/Images/projects-loop3-bg.webp";
import MaderoBg from "../../Assets/Images/projects-maderotango-bg.webp";
import DaleplastBg from "../../Assets/Images/projects-daleplast-bg.webp";
import TuEspacioBg from "../../Assets/Images/projects-tuespacio-bg.webp";

export default function HomeProjects() {
  return (
    <div className="HomeProjects">
      <div className="HomeProjectsContainer">
        <p className="HomeProjectsContainer__SectionTitle SectionTitle">
          Nosotros <img src={TitleLine} alt="Icon"></img>
        </p>
        <p className="HomeProjectsContainer__Title">
          Somos un estudio creativo especializado en comunicar historias a
          través del branding
        </p>
        <div className="HomeProjectsContainer__Line"></div>
        <p className="HomeProjectsContainer__Description">
          {" "}
          A full-cycle digital service agency. We do from design to end-to-end
          development to maintenance.
        </p>
        <p className="HomeProjectsContainer__SectionTitle SectionTitle">
          Proyectos <img src={TitleLine} alt="Icon"></img>
        </p>
        <div className="HomeProjectsContainer__Projects">
          <p className="HomeProjectsContainer__Projects--Title">
            Nuestra selección
          </p>
          {/* PROJECT BOX */}
          <div className="ProjectBox">
            <div className="ProjectBox__ImageContainer">
              <img
                src={LoopBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title">Loop3</p>
            <p className="ProjectBox__Location">Buenos Aires, ARG</p>
          </div>
          {/* PROJECT BOX */}
          <div className="ProjectBox">
            <div className="ProjectBox__ImageContainer">
              <img
                src={MaderoBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title">Madero Tango</p>
            <p className="ProjectBox__Location">Buenos Aires, ARG</p>
          </div>
          {/* PROJECT BOX */}
          <div className="ProjectBox">
            <div className="ProjectBox__ImageContainer">
              <img
                src={DaleplastBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title">Daleplast</p>
            <p className="ProjectBox__Location">Buenos Aires, ARG</p>
          </div>
          {/* PROJECT BOX */}
          <div className="ProjectBox">
            <div className="ProjectBox__ImageContainer">
              <img
                src={TuEspacioBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title">Tu Espacio</p>
            <p className="ProjectBox__Location">Buenos Aires, ARG</p>
          </div>
        </div>
        <div className="HomeProjectsContainer__MoreButton">
          <div className="HomeProjectsContainer__MoreButton--Arrow"></div>
          <p className="HomeProjectsContainer__MoreButton--Text">VER MÁS</p>
        </div>
      </div>
    </div>
  );
}
