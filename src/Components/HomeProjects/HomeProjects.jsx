import useObserver from "../useObserver/useObserver";
import TuEspacioBg from "../../Assets/Images/projects-hero-mob-tuespacio.webp";
import AceproBg from "../../Assets/Images/projects-hero-mob-acepro.webp";
import NaturgreenBg from "../../Assets/Images/projects-hero-mob-naturgreen.webp";
import SupraBg from "../../Assets/Images/projects-hero-mob-supra.webp";
import InadeaBg from "../../Assets/Images/projects-hero-mob-inadea.png";
import MaderoViajensBg from "../../Assets/Images/projects-hero-mob-maderoviajens.webp";
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
  const [elementRef13, isIntersecting13] = useObserver({
    threshold: 0.4,
  });
  const [elementRef14, isIntersecting14] = useObserver({
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
          <strong>Participamos en cada etapa del proyecto,</strong> desde la
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
            to="/projects/tu-espacio"
            className={`ProjectBox ${
              isIntersecting8 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={TuEspacioBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title ">Tu Espacio</h6>
            <p className="ProjectBox__Location  Text">Tucumán, Argentina</p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef9}
            to="/projects/acepro"
            className={`ProjectBox ${
              isIntersecting9 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={AceproBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title ">Acepro</h6>
            <p className="ProjectBox__Location  Text">Santiago, Chile</p>
          </Link>
          {/* PROJECT BOX */}

          <Link
            ref={elementRef10}
            to="/projects/naturgreen"
            className={`ProjectBox ${
              isIntersecting10 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={NaturgreenBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title">Naturgreen</h6>
            <p className="ProjectBox__Location  Text">Sevilla, España</p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef11}
            to="/projects/supra"
            className={`ProjectBox ${
              isIntersecting11 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={SupraBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Supra</h6>
            <p className="ProjectBox__Location  Text">
              Buenos Aires, Argentina
            </p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef12}
            to="/projects/inadea"
            className={`ProjectBox ${
              isIntersecting12 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={InadeaBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Inadea</h6>
            <p className="ProjectBox__Location  Text">
              Buenos Aires, Argentina
            </p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef13}
            to="/projects/madero-viagens"
            className={`ProjectBox ${
              isIntersecting13 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={MaderoViajensBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Madero Viagens</h6>
            <p className="ProjectBox__Location  Text">
              Buenos Aires, Argentina
            </p>
          </Link>
        </div>
        {/* MORE BUTTON */}
        <Link
          to="/projects"
          ref={elementRef14}
          className={`HomeProjectsContainer__MoreButton Button ${
            isIntersecting14 ? "Intersecting" : "NotIntersecting"
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
