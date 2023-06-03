import TitleLine from "../../Assets/Images/sectiontitle-line.svg";
import LoopBg from "../../Assets/Images/projects-loop3-bg.webp";
import MaderoBg from "../../Assets/Images/projects-maderotango-bg.webp";
import DaleplastBg from "../../Assets/Images/projects-daleplast-bg.webp";
import TuEspacioBg from "../../Assets/Images/projects-tuespacio-bg.webp";
import { Link } from "react-router-dom";

export default function HomeProjects() {
  return (
    <div className="HomeProjects">
      <div className="HomeProjectsContainer">
        {/* BACKGROUND CIRCLE */}
        <div className="HomeProjectsContainer__Circle"></div>
        {/* SECTION TITLE */}
        <p className="HomeProjectsContainer__SectionTitle SectionTitle">
          Nosotros <img src={TitleLine} alt="Icon"></img>
        </p>
        {/* TITLE */}
        <p className="HomeProjectsContainer__Title Title">
          Somos un estudio 360° dedicado a impulsar marcas combinando la
          creatividad y estrategia
        </p>
        {/* LINE */}
        <div className="HomeProjectsContainer__Line"></div>
        {/* TEXT */}
        <p className="HomeProjectsContainer__Description Text Mobile">
          {" "}
          <span>Participamos en cada etapa del proyecto,</span> desde la
          estrategia y posicionamiento, hasta la implementación de identidades
          visuales y experiencias digitales que conecten con tu comunidad.
        </p>
        <p className="HomeProjectsContainer__Description Text Desktop">
          {" "}
          <span>Participamos en cada etapa del proyecto,</span> desde <br /> la
          estrategia y posicionamiento, hasta la implementación de identidades
          visuales y experiencias digitales que conecten con tu comunidad.
        </p>
        {/* SECTION TITLE */}
        <p className="HomeProjectsContainer__SectionTitle SectionTitle">
          Proyectos <img src={TitleLine} alt="Icon"></img>
        </p>
        {/* PROJECTS CONTAINER */}
        <div className="HomeProjectsContainer__Projects">
          <p className="HomeProjectsContainer__Projects--Title Title">
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
        {/* MORE BUTTON */}
        <Link
          to="/projects"
          className="HomeProjectsContainer__MoreButton Button "
        >
          <div className="HomeProjectsContainer__MoreButton--Arrow Button-Arrow"></div>
          <p className="HomeProjectsContainer__MoreButton--Text Button-Text">
            VER MÁS
          </p>
        </Link>
      </div>
    </div>
  );
}
