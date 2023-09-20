import useObserver from "../useObserver/useObserver";
import LoopBg from "../../Assets/Images/projects-loop3-bg.webp";
import LoopLogo from "../../Assets/Images/projects-loop3-logo.png";
import MaderoBg from "../../Assets/Images/projects-maderotango-bg.webp";
import MaderoLogo from "../../Assets/Images/projects-maderotango-logo.png";
import DaleplastBg from "../../Assets/Images/projects-daleplast-bg.webp";
import DaleplastLogo from "../../Assets/Images/projects-daleplast-logo.png";
import TuEspacioBg from "../../Assets/Images/projects-tuespacio-bg.webp";
import TuEspacioLogo from "../../Assets/Images/projects-tuespacio-logo.svg";
import { Link } from "react-router-dom";

export default function HomeProjects() {
  const [elementRef1, isIntersecting1] = useObserver({
    threshold: 0.1,
  });
  const [elementRef2, isIntersecting2] = useObserver({
    threshold: 0.75,
  });
  const [elementRef3, isIntersecting3] = useObserver({
    threshold: 0.75,
  });
  const [elementRef4, isIntersecting4] = useObserver({
    threshold: 0.75,
  });
  const [elementRef5, isIntersecting5] = useObserver({
    threshold: 0.75,
  });
  const [elementRef6, isIntersecting6] = useObserver({
    threshold: 0.75,
  });
  const [elementRef7, isIntersecting7] = useObserver({
    threshold: 0.75,
  });
  const [elementRef8, isIntersecting8] = useObserver({
    threshold: 0.4,
  });
  const [elementRef9, isIntersecting9] = useObserver({
    threshold: 0.4,
  });
  const [elementRef10, isIntersecting10] = useObserver({
    threshold: 0.4,
  });
  const [elementRef11, isIntersecting11] = useObserver({
    threshold: 0.4,
  });
  const [elementRef12, isIntersecting12] = useObserver({
    threshold: 0.4,
  });

  return (
    <div
      ref={elementRef1}
      className={`HomeProjects ${
        isIntersecting1 ? "Intersecting" : "NotIntersecting"
      }`}
      id="Proyectos"
    >
      <div className="HomeProjectsContainer">
        {/* BACKGROUND CIRCLE */}
        <div className="HomeProjectsContainer__Circle"></div>
        {/* SECTION TITLE */}
        <h2
          className={`HomeProjectsContainer__SectionTitle SectionTitle ${
            isIntersecting1 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          <span className="SectionTitle__Circle"></span> Nosotros
        </h2>
        {/* TITLE */}
        <h3
          ref={elementRef2}
          className={`HomeProjectsContainer__Title Title-MediumFont Title ${
            isIntersecting2 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          Somos un estudio 360° dedicado a impulsar marcas combinando la
          creatividad y estrategia.
        </h3>
        {/* LINE */}
        <div
          ref={elementRef3}
          className={`HomeProjectsContainer__Line ${
            isIntersecting3 ? "Intersecting" : "NotIntersecting"
          }`}
        ></div>
        {/* TEXT */}
        <p
          ref={elementRef4}
          className={`HomeProjectsContainer__Description Text-MediumFont Text Mobile ${
            isIntersecting4 ? "Intersecting" : "NotIntersecting"
          }  `}
        >
          {" "}
          <span>Participamos en cada etapa del proyecto,</span> desde la
          estrategia y posicionamiento, hasta la implementación de identidades
          visuales y experiencias digitales que conecten con tu comunidad.
        </p>
        <p
          ref={elementRef5}
          className={`HomeProjectsContainer__Description Text-MediumFont Text Desktop ${
            isIntersecting5 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          {" "}
          <span>Participamos en cada etapa del proyecto,</span> desde <br /> la
          estrategia y posicionamiento, hasta la implementación de identidades
          visuales y experiencias digitales que conecten con tu comunidad.
        </p>
        {/* SECTION TITLE */}
        <h2
          id="Proyectos"
          ref={elementRef6}
          className={`HomeProjectsContainer__SectionTitle SectionTitle ${
            isIntersecting6 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          <span className="SectionTitle__Circle"></span> Proyectos
        </h2>
        {/* PROJECTS CONTAINER */}
        <div className="HomeProjectsContainer__Projects">
          <p
            ref={elementRef7}
            className={`HomeProjectsContainer__Projects--Title Title-MediumFont Title ${
              isIntersecting7 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            Nuestra selección
          </p>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef8}
            to="/projects/1"
            className={`ProjectBox ${
              isIntersecting8 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={LoopBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title Title-SmallFont ">Loop3</p>
            <p className="ProjectBox__Location Title-SmallFont">
              Buenos Aires, ARG
            </p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef9}
            to="/projects/2"
            className={`ProjectBox ${
              isIntersecting9 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={MaderoBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title Title-SmallFont">Madero Tango</p>
            <p className="ProjectBox__Location Title-SmallFont">
              Buenos Aires, ARG
            </p>
          </Link>
          {/* PROJECT BOX */}

          <Link
            ref={elementRef10}
            to="/projects/3"
            className={`ProjectBox ${
              isIntersecting10 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={DaleplastBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title Title-SmallFont">Daleplast</p>
            <p className="ProjectBox__Location Title-SmallFont">
              Buenos Aires, ARG
            </p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef11}
            to="/projects/4"
            className={`ProjectBox ${
              isIntersecting11 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={TuEspacioBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <p className="ProjectBox__Title Title-SmallFont">Tu Espacio</p>
            <p className="ProjectBox__Location Title-SmallFont">
              Buenos Aires, ARG
            </p>
          </Link>
        </div>
        {/* MORE BUTTON */}
        <Link
          to="/projects"
          ref={elementRef12}
          className={`HomeProjectsContainer__MoreButton Button ${
            isIntersecting12 ? "Intersecting" : "NotIntersecting"
          }`}
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
