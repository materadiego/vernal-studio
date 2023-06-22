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
  const [slideAnimation1, setSlideAnimation1] = useState(true);
  const [slideAnimation2, setSlideAnimation2] = useState(false);
  const [slideAnimation3, setSlideAnimation3] = useState(false);
  const [slideAnimation4, setSlideAnimation4] = useState(false);

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
    <div className="HomeServices" id="Servicios">
      <div className="HomeServicesContainer">
        {/* SECTION TITLE */}
        <h2 className="HomeServicesContainer__SectionTitle SectionTitle">
          Servicios <img src={TitleLine} alt="Icon"></img>
        </h2>
        {/* SECTIONS */}
        <div className="HomeServicesContainer__Subcontainer">
          {/* Branding */}
          <h3
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide1", 1, "ServicesBgPosition1")}
          >
            Branding
          </h3>
          {/* Web design */}
          <h3
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide2", 2, "ServicesBgPosition2")}
          >
            Web & apps
          </h3>
          {/* Social Media */}
          <h3
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide3", 3, "ServicesBgPosition3")}
          >
            Social Media
          </h3>
          {/* Marketing */}
          <h3
            className="HomeServicesContainer__Subcontainer--Title"
            onClick={() => handleSlide("Slide4", 4, "ServicesBgPosition4")}
          >
            Marketing
          </h3>
          {/* SECTION INFO */}
          <div className={`ServicesSlider ${bgPosition}`}>
            <div className={`ServicesSlider__Wrapper ${slideNumber}`}>
              {/* BRANDING INFO / Slide 1 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <h4
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation1 ? "Opacity" : ""
                  }`}
                >
                  Identidades fuertes que impactan
                </h4>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span className="ServicesSlide-Text__Number">01 .</span>{" "}
                  Análisis de oportunidades y diferenciales
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span className="ServicesSlide-Text__Number">02 .</span>{" "}
                  Creación de estrategia y posicionamiento
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span className="ServicesSlide-Text__Number">03 .</span>{" "}
                  Diseño de logotipo e identidad visual
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation1
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                  <span className="ServicesSlide-Text__Number">04 .</span>{" "}
                  Aplicaciones digitales y físicas
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
              {/* WEB & APPS INFO / Slide 2 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <h4
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation2 ? "Opacity" : ""
                  }`}
                >
                  Experiencias digitales inmersivas
                </h4>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation2
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span className="ServicesSlide-Text__Number">01 .</span>Diseño
                  y desarrollo web & e-commerce
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation2
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span className="ServicesSlide-Text__Number">02 .</span>{" "}
                  Creación de aplicaciones móviles
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation2
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span className="ServicesSlide-Text__Number">03 .</span>
                  Optimización SEO
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
              {/* SOCIAL MEDIA INFO / Slide 3 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <h4
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation3 ? "Opacity" : ""
                  }`}
                >
                  Comunidad digitales que conectan
                </h4>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span className="ServicesSlide-Text__Number Services-span4">
                    01 .
                  </span>{" "}
                  Creación y gestión de perfiles
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span className="ServicesSlide-Text__Number Services-span4">
                    02 .
                  </span>{" "}
                  Desarrollo de contenido para RRSS
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span className="ServicesSlide-Text__Number">03 .</span>{" "}
                  Diseño y planificación de campañas
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation3
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                  <span className="ServicesSlide-Text__Number">04 .</span>{" "}
                  Análisis y seguimiento de métricas
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
              {/* MARKETING INFO / Slide 4 */}
              <div className="ServicesSlider__Wrapper--Slide">
                <h4
                  className={`ServicesSlide-Subtitle ${
                    slideAnimation4 ? "Opacity" : ""
                  }`}
                >
                  Impulso digital para potenciar resultados{" "}
                </h4>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation1"></span>{" "}
                  <span className="ServicesSlide-Text__Number">01 .</span>{" "}
                  Investigación de mercado y competencia
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation2"></span>{" "}
                  <span className="ServicesSlide-Text__Number">02 .</span>{" "}
                  Estrategias de marketing digital integrales
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation3"></span>{" "}
                  <span className="ServicesSlide-Text__Number">03 .</span>{" "}
                  Planificación y seguimiento de campañas
                </p>
                <p
                  className={`ServicesSlide-Text ${
                    slideAnimation4
                      ? "Span-Animation Services-Text-Opacity-Animation"
                      : ""
                  }`}
                >
                  <span className="Span-Animation-Block ServicesSpanAnimation4"></span>{" "}
                  <span className="ServicesSlide-Text__Number Services-span4">
                    04 .
                  </span>
                  Desarrollo de email marketing y newsletter
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
