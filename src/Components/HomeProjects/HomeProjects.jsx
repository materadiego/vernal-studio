import useObserver from "../useObserver/useObserver";
import novarBg from "../../Assets/Images/projects-hero-mob-novar.png";
import sensoryFoodBg from "../../Assets/Images/projects-hero-mob-sensoryfood.png";
import inadeaBg from "../../Assets/Images/projects-hero-mob-inadea.png";
import daleplastBg from "../../Assets/Images/projects-hero-mob-daleplast.webp";
import tuEspacioBg from "../../Assets/Images/projects-hero-mob-tuespacio.webp";
import trypoBg from "../../Assets/Images/projects-hero-mob-trypo.png";
import maderoTangoBg from "../../Assets/Images/projects-hero-mob-madero-tango.png";
import elovateBg from "../../Assets/Images/projects-hero-mob-elovate.png";
import { Link } from "react-router-dom";

export default function HomeProjects({ langEn }) {
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
  const [elementRef15, isIntersecting15] = useObserver({
    threshold: 0.4,
  });
  const [elementRef16, isIntersecting16] = useObserver({
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
          <span className="SectionTitle__Circle"></span>
          {langEn ? "About Us" : "Nosotros"}
        </h2>
        {/* TITLE */}
        <h3
          ref={elementRef2}
          className={`HomeProjectsContainer__Title Title-MediumFont Title ${
            isIntersecting2 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          {langEn
            ? "We are a 360° studio dedicated to boosting brands by combining creativity and strategy"
            : "Somos un estudio 360° dedicado a impulsar marcas combinando la  creatividad y estrategia."}
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
          className={`HomeProjectsContainer__Description Text-SmallFont Text Mobile ${
            isIntersecting4 ? "Intersecting" : "NotIntersecting"
          }  `}
        >
          <span>
            {langEn
              ? "We are involved in every stage of the project, "
              : "Participamos en cada etapa del proyecto, "}
          </span>
          {langEn
            ? "from strategy and positioning"
            : "desde la estrategia y posicionamiento,"}
          <br />
          {langEn
            ? "to the implementation of visual identities"
            : " hasta la implementación de identidades"}
          <br />{" "}
          {langEn
            ? " and digital experiences that connect"
            : " visuales y experiencias digitales que"}
          <br />
          {langEn ? "with your community" : "conecten con tu comunidad."}
        </p>
        <p
          ref={elementRef5}
          className={`HomeProjectsContainer__Description Text-MediumFont Text Desktop ${
            isIntersecting5 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          {" "}
          <span>
            {langEn
              ? "We are involved in every stage of the project,"
              : "Participamos en cada etapa del proyecto,"}{" "}
          </span>
          {langEn ? "" : ""} desde <br /> la estrategia y posicionamiento, hasta
          la implementación de identidades visuales y experiencias digitales que
          conecten con tu comunidad.
        </p>
        {/* SECTION TITLE */}
        <h2
          id="Proyectos"
          ref={elementRef6}
          className={`HomeProjectsContainer__SectionTitle SectionTitle ${
            isIntersecting6 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          <span className="SectionTitle__Circle"></span>
          {langEn ? "Projects" : "Proyectos"}
        </h2>
        {/* PROJECTS CONTAINER */}
        <div className="HomeProjectsContainer__Projects">
          <p
            ref={elementRef7}
            className={`HomeProjectsContainer__Projects--Title Title-MediumFont Title ${
              isIntersecting7 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            {langEn ? "Our Selection" : "Nuestra selección"}
          </p>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef8}
            to="/projects/novar"
            className={`ProjectBox ${
              isIntersecting8 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={novarBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title ">Novar</h6>
            <p className="ProjectBox__Location  Text">
              Buenos Aires, Argentina
            </p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef9}
            to="/projects/sensory-food"
            className={`ProjectBox ${
              isIntersecting9 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={sensoryFoodBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title ">Sensory Food</h6>
            <p className="ProjectBox__Location  Text">Valencia, España</p>
          </Link>

          {/* PROJECT BOX */}

          <Link
            ref={elementRef10}
            to="/projects/elovate-life"
            className={`ProjectBox ${
              isIntersecting10 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={elovateBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title">Elovate Life</h6>
            <p className="ProjectBox__Location  Text">Miami, Estados Unidos</p>
          </Link>
          {/* PROJECT BOX */}

          <Link
            ref={elementRef11}
            to="/projects/madero-tango"
            className={`ProjectBox ${
              isIntersecting11 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer `}>
              <img
                src={maderoTangoBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title   Title">Madero Tango</h6>
            <p className="ProjectBox__Location  Text">
              Buenos Aires, Argentina
            </p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef12}
            to="/projects/trypo"
            className={`ProjectBox ${
              isIntersecting12 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={trypoBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Trypo</h6>
            <p className="ProjectBox__Location  Text">Santiago, Chile</p>
          </Link>
          {/* PROJECT BOX */}
          <Link
            ref={elementRef13}
            to="/projects/tu-espacio"
            className={`ProjectBox ${
              isIntersecting13 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={tuEspacioBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Tu Espacio</h6>
            <p className="ProjectBox__Location  Text">Tucumán, Argentina</p>
          </Link>
          <Link
            ref={elementRef14}
            to="/projects/daleplast"
            className={`ProjectBox ${
              isIntersecting14 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={daleplastBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Daleplast</h6>
            <p className="ProjectBox__Location  Text">
              Tierra del Fuego, Argentina
            </p>
          </Link>
          <Link
            ref={elementRef15}
            to="/projects/inadea"
            className={`ProjectBox ${
              isIntersecting15 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            <div className={`ProjectBox__ImageContainer`}>
              <img
                src={inadeaBg}
                alt="Projects"
                className="ProjectBox__ImageContainer--Image"
              ></img>
            </div>
            <h6 className="ProjectBox__Title  Title">Inadea</h6>
            <p className="ProjectBox__Location  Text">
              Buenos Aires, Argentina
            </p>
          </Link>
        </div>
        {/* MORE BUTTON */}
        <Link
          to="/projects"
          ref={elementRef16}
          className={`HomeProjectsContainer__MoreButton Button ${
            isIntersecting16 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          <div className="HomeProjectsContainer__MoreButton--Arrow Button-Arrow"></div>
          <p className="HomeProjectsContainer__MoreButton--Text Button-Text">
            {langEn ? "VIEW MORE" : "VER MÁS"}
          </p>
        </Link>
      </div>
    </div>
  );
}
