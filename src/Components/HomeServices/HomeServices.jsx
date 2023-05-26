import { useState } from "react";
import TitleLine from "../../Assets/Images/sectiontitle-line.svg";
import BrandingImageMobile from "../../Assets/Images/servicios1.webp";
import WebDesignImageMobile from "../../Assets/Images/servicios2.webp";
import UxUiImageMobile from "../../Assets/Images/servicios3.webp";
import SocialMediaImageMobile from "../../Assets/Images/servicios4.webp";
import BrandingImageDesktop from "../../Assets/Images/servicios5.webp";
import WebDesignImageDesktop from "../../Assets/Images/servicios6.webp";
import UxUiImageDesktop from "../../Assets/Images/servicios7.webp";
import SocialMediaImageDesktop from "../../Assets/Images/servicios8.webp";

export default function HomeServices() {
  const [slide, setSlide] = useState("Slide1");
  const [bgPosition, setBgPosition] = useState("ServicesBgPosition1");
  const [slideAnimation1, setSlideAnimation1] = useState(false);
  const [slideAnimation2, setSlideAnimation2] = useState(false);
  const [slideAnimation3, setSlideAnimation3] = useState(false);
  const [slideAnimation4, setSlideAnimation4] = useState(false);

  // function toSlide(slideNumber) {
  //   setSlide(slideNumber);
  //   console.log(slideNumber);
  // }

  // const handleSlide1 = (event) => {
  //   console.log(event);
  //   setSlide("Slide1");
  // };

  function handleSlide(slide, animation, bgPosition) {
    setSlide(slide);
    setBgPosition(bgPosition);
    if (animation === 1) {
      setSlideAnimation1(true);
      setSlideAnimation2(false);
      setSlideAnimation3(false);
      setSlideAnimation4(false);
    } else if (animation === 2) {
      setSlideAnimation1(false);
      setSlideAnimation2(true);
      setSlideAnimation3(false);
      setSlideAnimation4(false);
    } else if (animation === 3) {
      setSlideAnimation1(false);
      setSlideAnimation2(false);
      setSlideAnimation3(true);
      setSlideAnimation4(false);
    } else if (animation === 4) {
      setSlideAnimation1(false);
      setSlideAnimation2(false);
      setSlideAnimation3(false);
      setSlideAnimation4(true);
    }
  }

  const slideNumber = slide;
  return (
    <div className="HomeServices">
      <div className="HomeServicesContainer">
        <p className="HomeServicesContainer__SectionTitle SectionTitle">
          Servicios <img src={TitleLine} alt="Icon"></img>
        </p>

        <div className="HomeServicesContainer__Subcontainer">
          {/* Branding */}
          <p
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide1", 1, "ServicesBgPosition1")}
          >
            Branding
          </p>
          {/* Web design */}
          <p
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide2", 2, "ServicesBgPosition2")}
          >
            Web & apps
          </p>
          {/* Social Media */}
          <p
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide3", 3, "ServicesBgPosition3")}
          >
            Social Media
          </p>
          {/* Marketing */}
          <p
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide4", 4, "ServicesBgPosition4")}
          >
            Marketing
          </p>

          <div className={`ServicesSlider ${bgPosition}`}>
            <div className={`ServicesSlider__Wrapper ${slideNumber}`}>
              {/* Slide 1 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <p
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation1 ? "Opacity" : ""
                  }`}
                >
                  Identidades fuertes que impactan
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span>01.</span> Análisis de oportunidades y diferenciales
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span>02.</span> Creación de estrategia y posicionamiento
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span>03.</span> Diseño de logotipo e identidad visual
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                  <span>04.</span> Aplicaciones digitales y físicas
                </p>
                <div className="ServicesSlide-Image Services-Image-Right1">
                  <img
                    src={BrandingImageMobile}
                    alt=""
                    className="Mobile"
                  ></img>
                  <img
                    src={BrandingImageDesktop}
                    alt=""
                    className={`Desktop ${
                      slideAnimation1 ? "Services-Image-Opacity" : ""
                    }`}
                  ></img>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <p
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation2 ? "Opacity" : ""
                  }`}
                >
                  Experiencias digitales inmersivas
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation2
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span>01.</span>Diseño y desarrollo web & e-commerce
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation2
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span>02.</span> Creación de aplicaciones móviles
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation2
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span>03.</span>Optimización SEO
                </p>

                <div className="ServicesSlide-Image Services-Image-Left1 Mobile">
                  <img
                    src={WebDesignImageMobile}
                    alt=""
                    className="Mobile"
                  ></img>
                  <img
                    src={WebDesignImageDesktop}
                    alt=""
                    className={`Desktop ${
                      slideAnimation2 ? "Services-Image-Opacity" : ""
                    }`}
                  ></img>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <p
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation3 ? "Opacity" : ""
                  }`}
                >
                  Comunidad digitales que conectan
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span>01.</span> Creación y gestión de perfiles
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span>02.</span> Desarrollo de contenido para redes sociales
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span>03.</span> Diseño y planificación de campañas
                  publicitarias
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                  <span>04.</span> Análisis y seguimiento de métricas y
                  estadisticas
                </p>
                <div className="ServicesSlide-Image Services-Image-Right2">
                  <img src={UxUiImageMobile} alt="" className="Mobile"></img>
                  <img
                    src={UxUiImageDesktop}
                    alt=""
                    className={`Desktop ${
                      slideAnimation3 ? "Services-Image-Opacity" : ""
                    }`}
                  ></img>
                </div>
              </div>
              {/* Slide 4 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <p
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation4 ? "Opacity" : ""
                  }`}
                >
                  Impulso digital para potenciar resultados{" "}
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span>01.</span> Investigación de mercado y análisis de la
                  competencia
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span>02.</span> Creación de estrategias de marketing digital
                  integral
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span>03.</span> Planificación y seguimiento de campañas
                  digitales
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                  <span>04.</span> Desarrollo de email marketing y newsletter
                </p>
                <div className="ServicesSlide-Image Services-Image-Left2">
                  <img
                    src={SocialMediaImageMobile}
                    alt=""
                    className="Mobile"
                  ></img>
                  <img
                    src={SocialMediaImageDesktop}
                    alt=""
                    className={`Desktop ${
                      slideAnimation4 ? "Services-Image-Opacity" : ""
                    }`}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
