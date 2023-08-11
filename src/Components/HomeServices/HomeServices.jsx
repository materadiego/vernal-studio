import { useState } from "react";
import arrow from "../../Assets/Images/projects-arrow-down.svg";

export default function HomeServices() {
  const [serviceImage, setServiceImage] = useState("ServicesImage-1");
  const [bgPosition, setBgPosition] = useState("ServicesBgPosition1");
  const [slideAnimation1, setSlideAnimation1] = useState(true);
  const [slideAnimation2, setSlideAnimation2] = useState(false);
  const [slideAnimation3, setSlideAnimation3] = useState(false);
  const [slideAnimation4, setSlideAnimation4] = useState(false);

  const handleSlide = (
    setSlideAnimation,
    slideAnimation,
    positionBg,
    positionImage
  ) => {
    setSlideAnimation(!slideAnimation);
    setBgPosition(positionBg);
    setServiceImage(positionImage);
    if (setSlideAnimation === setSlideAnimation1) {
      setSlideAnimation2(false);
      setSlideAnimation3(false);
      setSlideAnimation4(false);
    } else if (setSlideAnimation === setSlideAnimation2) {
      setSlideAnimation1(false);
      setSlideAnimation3(false);
      setSlideAnimation4(false);
    } else if (setSlideAnimation === setSlideAnimation3) {
      setSlideAnimation1(false);
      setSlideAnimation2(false);
      setSlideAnimation4(false);
    } else if (setSlideAnimation === setSlideAnimation4) {
      setSlideAnimation1(false);
      setSlideAnimation2(false);
      setSlideAnimation3(false);
    }
  };

  // function handleSlide(slide, animation, bgPosition) {
  //   setSlide(slide);
  //   setBgPosition(bgPosition);
  //   if (animation === 1) {
  //     setSlideAnimation2(false);
  //     setSlideAnimation3(false);
  //     setSlideAnimation4(false);
  //   } else if (animation === 2) {
  //     setSlideAnimation1(false);
  //     setSlideAnimation3(false);
  //     setSlideAnimation4(false);
  //   } else if (animation === 3) {
  //     setSlideAnimation1(false);
  //     setSlideAnimation2(false);
  //     setSlideAnimation4(false);
  //   } else if (animation === 4) {
  //     setSlideAnimation1(false);
  //     setSlideAnimation2(false);
  //     setSlideAnimation3(false);
  //   }
  // }

  return (
    <div className="HomeServices" id="Servicios">
      <div className="HomeServicesContainer">
        {/* SECTION TITLE */}
        <h2 className="HomeServicesContainer__SectionTitle SectionTitle">
          <span className="SectionTitle__Circle"></span> Servicios
        </h2>
        {/* SECTIONS */}
        <div className="HomeServicesContainer-Subcontainer">
          {/* Branding */}
          <div
            className={`ServiceContainer ${
              slideAnimation1
                ? "ServiceContainer--Open"
                : "ServiceContainer--Close"
            }`}
          >
            <h3
              className="ServiceContainer-Title"
              onClick={() =>
                handleSlide(
                  setSlideAnimation1,
                  slideAnimation1,
                  "ServicesBgPosition1",
                  "ServicesImage-1"
                )
              }
            >
              Branding{" "}
              <img
                src={arrow}
                alt="Open"
                className={`ServiceContainer-Title-Arrow ${
                  slideAnimation1
                    ? "ServiceContainer-Title-Arrow--Open"
                    : "ServiceContainer-Title-Arrow--Close"
                }`}
              ></img>
            </h3>
            <div
              className={`ServiceContainer-ServicesWrapper ${
                slideAnimation1
                  ? "ServiceContainer-ServicesWrapper--Open"
                  : "ServiceContainer-ServicesWrapper--Close"
              }`}
            >
              <h4 className={`ServicesSlide-Subtitle `}>
                Identidades fuertes que impactan
              </h4>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                <span className="ServicesSlide-Text__Number">01 .</span>{" "}
                Análisis de oportunidades y diferenciales
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                <span className="ServicesSlide-Text__Number">02 .</span>{" "}
                Creación de estrategia y posicionamiento
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                <span className="ServicesSlide-Text__Number">03 .</span> Diseño
                de logotipo e identidad visual
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                <span className="ServicesSlide-Text__Number">04 .</span>{" "}
                Aplicaciones digitales y físicas
              </p>
            </div>
          </div>
          {/* Web design */}
          <div
            className={`ServiceContainer ${
              slideAnimation2
                ? "ServiceContainer--Open2"
                : "ServiceContainer--Close2"
            }`}
          >
            <h3
              className="ServiceContainer-Title"
              onClick={() =>
                handleSlide(
                  setSlideAnimation2,
                  slideAnimation2,
                  "ServicesBgPosition2",
                  "ServicesImage-2"
                )
              }
            >
              Web & apps{" "}
              <img
                src={arrow}
                alt="Open"
                className={`ServiceContainer-Title-Arrow ${
                  slideAnimation2
                    ? "ServiceContainer-Title-Arrow--Open"
                    : "ServiceContainer-Title-Arrow--Close"
                }`}
              ></img>
            </h3>
            <div
              className={`ServiceContainer-ServicesWrapper ${
                slideAnimation2
                  ? "ServiceContainer-ServicesWrapper--Open"
                  : "ServiceContainer-ServicesWrapper--Close"
              }`}
            >
              <h4 className={`ServicesSlide-Subtitle `}>
                Experiencias digitales inmersivas
              </h4>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                <span className="ServicesSlide-Text__Number">01 .</span>Diseño y
                desarrollo web & e-commerce
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                <span className="ServicesSlide-Text__Number">02 .</span>{" "}
                Creación de aplicaciones móviles
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                <span className="ServicesSlide-Text__Number">03 .</span>
                Optimización SEO
              </p>
            </div>
          </div>
          {/* Social Media */}
          <div
            className={`ServiceContainer ${
              slideAnimation3
                ? "ServiceContainer--Open"
                : "ServiceContainer--Close"
            }`}
          >
            <h3
              className="ServiceContainer-Title"
              onClick={() =>
                handleSlide(
                  setSlideAnimation3,
                  slideAnimation3,
                  "ServicesBgPosition3",
                  "ServicesImage-3"
                )
              }
            >
              Social Media{" "}
              <img
                src={arrow}
                alt="Open"
                className={`ServiceContainer-Title-Arrow ${
                  slideAnimation3
                    ? "ServiceContainer-Title-Arrow--Open"
                    : "ServiceContainer-Title-Arrow--Close"
                }`}
              ></img>
            </h3>
            <div
              className={`ServiceContainer-ServicesWrapper ${
                slideAnimation3
                  ? "ServiceContainer-ServicesWrapper--Open"
                  : "ServiceContainer-ServicesWrapper--Close"
              }`}
            >
              <h4 className={`ServicesSlide-Subtitle `}>
                Comunidad digitales que conectan
              </h4>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                <span className="ServicesSlide-Text__Number Services-span4">
                  01 .
                </span>{" "}
                Creación y gestión de perfiles
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                <span className="ServicesSlide-Text__Number Services-span4">
                  02 .
                </span>{" "}
                Desarrollo de contenido para RRSS
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                <span className="ServicesSlide-Text__Number">03 .</span> Diseño
                y planificación de campañas
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                <span className="ServicesSlide-Text__Number">04 .</span>{" "}
                Análisis y seguimiento de métricas
              </p>
            </div>
          </div>
          {/* Marketing */}
          <div
            className={`ServiceContainer ${
              slideAnimation4
                ? "ServiceContainer--Open"
                : "ServiceContainer--Close"
            }`}
          >
            <h3
              className="ServiceContainer-Title "
              onClick={() =>
                handleSlide(
                  setSlideAnimation4,
                  slideAnimation4,
                  "ServicesBgPosition4",
                  "ServicesImage-4"
                )
              }
            >
              Marketing{" "}
              <img
                src={arrow}
                alt="Open"
                className={`ServiceContainer-Title-Arrow ${
                  slideAnimation4
                    ? "ServiceContainer-Title-Arrow--Open"
                    : "ServiceContainer-Title-Arrow--Close"
                }`}
              ></img>
            </h3>
            <div
              className={`ServiceContainer-ServicesWrapper ${
                slideAnimation4
                  ? "ServiceContainer-ServicesWrapper--Open"
                  : "ServiceContainer-ServicesWrapper--Close"
              }`}
            >
              <h4 className={`ServicesSlide-Subtitle `}>
                Impulso digital para potenciar resultados{" "}
              </h4>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                <span className="ServicesSlide-Text__Number">01 .</span>{" "}
                Investigación de mercado y competencia
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                <span className="ServicesSlide-Text__Number">02 .</span>{" "}
                Estrategias de marketing digital integrales
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                <span className="ServicesSlide-Text__Number">03 .</span>{" "}
                Planificación y seguimiento de campañas
              </p>
              <p className={`ServicesSlide-Text `}>
                <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                <span className="ServicesSlide-Text__Number Services-span4">
                  04 .
                </span>
                Desarrollo de email marketing y newsletter
              </p>
            </div>
          </div>
        </div>
        <div className={`HomeServicesContainer-ImageContainer ${bgPosition}`}>
          <div
            className={`HomeServicesContainer-ImageContainer-Image ${serviceImage}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
