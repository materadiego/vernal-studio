import useObserver from "../useObserver/useObserver";

export default function HomeMetodology({ langEn }) {
  // Itersections
  const [elementRef1, isIntersecting1] = useObserver({
    threshold: 0.1,
  });
  const [elementRef2, isIntersecting2] = useObserver({
    threshold: 1,
  });
  const [elementRef3, isIntersecting3] = useObserver({
    threshold: 1,
  });
  const [elementRef4, isIntersecting4] = useObserver({
    threshold: 1,
  });
  const [elementRef5, isIntersecting5] = useObserver({
    threshold: 1,
  });
  const [elementRef6, isIntersecting6] = useObserver({
    threshold: 0.3,
  });

  return (
    <div
      ref={elementRef1}
      className={`HomeMetodology ${
        isIntersecting1 ? "Intersecting" : "NotIntersecting"
      }`}
      id="Approach"
    >
      <div ref={elementRef6} className="HomeMetodologyContainer">
        {/* SECTION TITLE */}
        <h2
          className={`HomeMetodologyContainer__SectionTitle SectionTitle ${
            isIntersecting1 ? "BgIntersecting" : "BgNotIntersecting"
          }`}
        >
          <span className={`SectionTitle__Circle `}></span> Approach
        </h2>
        {/* SUBCONTAINER */}
        <div
          ref={elementRef2}
          className={`HomeMetodologyContainer__Subcontainer ${
            isIntersecting2 ? "Intersecting" : "NotIntersecting"
          }`}
        >
          <p
            className={`HomeMetodologyContainer__Subcontainer--Number ${
              isIntersecting2 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            01
          </p>
          <div
            className={`HomeMetodologyContainer__Subcontainer--Line ${
              isIntersecting2 ? "Intersecting" : "NotIntersecting"
            }`}
          ></div>

          <h4 className="HomeMetodologyContainer__Subcontainer--Title Title-BigFont Title-BigFont Title">
            {langEn ? "Connection" : "Conexión"}
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont  Text ">
            <span>
              {langEn
                ? "The first step is to connect. "
                : "El primer paso es conocernos. "}
            </span>
            {langEn
              ? "We learn about your goals and expectations to create a personalized plan"
              : "Aprendemos acerca de tus objetivos y expectativas para crear un plan de trabajo personalizado."}
          </p>
        </div>
        {/* SUBCONTAINER */}
        <div
          ref={elementRef3}
          className={`HomeMetodologyContainer__Subcontainer ${
            isIntersecting3 ? "Intersecting" : "NotIntersecting"
          } `}
        >
          <p
            className={`HomeMetodologyContainer__Subcontainer--Number ${
              isIntersecting3 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            02
          </p>
          <div
            className={`HomeMetodologyContainer__Subcontainer--Line ${
              isIntersecting3 ? "Intersecting" : "NotIntersecting"
            }`}
          ></div>

          <h4 className="HomeMetodologyContainer__Subcontainer--Title Title-BigFont Title">
            {langEn ? "Perspective" : "Perspectiva"}
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont Text">
            <span>
              {" "}
              {langEn
                ? "An impactful plan requires perspective. "
                : "Un plan de impacto requiere perspectiva. "}
            </span>
            {langEn
              ? "We research your consumers, relevant trends, competitors, the market, and more."
              : "Investigamos sobre tus consumidores, tendencias relevantes, competidores, el mercado y más."}{" "}
            <br />{" "}
          </p>
        </div>
        {/* SUBCONTAINER */}
        <div
          ref={elementRef4}
          className={`HomeMetodologyContainer__Subcontainer ${
            isIntersecting4 ? "Intersecting" : "NotIntersecting"
          } `}
        >
          <p
            className={`HomeMetodologyContainer__Subcontainer--Number ${
              isIntersecting4 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            03
          </p>
          <div
            className={`HomeMetodologyContainer__Subcontainer--Line ${
              isIntersecting4 ? "Intersecting" : "NotIntersecting"
            }`}
          ></div>

          <h4 className="HomeMetodologyContainer__Subcontainer--Title Title-BigFont Title">
            {langEn ? "Concept" : "Concepto"}
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont Text">
            <span>
              {" "}
              {langEn
                ? "We create a powerful concept. "
                : "Creamos un concepto poderoso. "}
            </span>
            {langEn
              ? "We fuse creativity and strategy to generate effective ideas that reflect the essence of the brand."
              : "Fusinamos creatividad y estrategia para generar ideas efectivas que  reflejen la escencia de la marca."}
          </p>
        </div>
        {/* SUBCONTAINER */}
        <div
          ref={elementRef5}
          className={`HomeMetodologyContainer__Subcontainer ${
            isIntersecting5 ? "Intersecting" : "NotIntersecting"
          } `}
        >
          <p
            className={`HomeMetodologyContainer__Subcontainer--Number ${
              isIntersecting5 ? "Intersecting" : "NotIntersecting"
            }`}
          >
            04
          </p>
          <div
            className={`HomeMetodologyContainer__Subcontainer--Line ${
              isIntersecting5 ? "Intersecting" : "NotIntersecting"
            }`}
          ></div>

          <h4 className="HomeMetodologyContainer__Subcontainer--Title Title-BigFont Title">
            {langEn ? "Construction" : "Construcción"}
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont  Text">
            <span>
              {langEn
                ? "A comprehensive brand experience. "
                : "Una experiencia de marca integral. "}{" "}
            </span>

            {langEn
              ? "Every communication element is designed to achieve a cohesive and unique result."
              : "Cada elemento de comunicación es diseñado para lograr un resultado cohesivo y único."}
          </p>
        </div>
      </div>
    </div>
  );
}
