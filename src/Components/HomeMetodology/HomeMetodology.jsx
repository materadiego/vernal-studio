import useObserver from "../useObserver/useObserver";

export default function HomeMetodology() {
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
            Conexión
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont  Text Mobile">
            <span>El primer paso es conocernos.</span>Aprendemos acerca de tus
            objetivos y expectativas para crear un plan de trabajo
            personalizado.
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont Text Desktop">
            <span>El primer paso es conocernos.</span>Aprendemos acerca de tus
            objetivos <br /> y expectativas para crear un plan
            <br /> de trabajo personalizado.
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
            Perspectiva
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont Text">
            <span>Un plan de impacto requiere perspectiva.</span>Investigamos
            sobre tus consumidores, tendencias relevantes, competidores, <br />{" "}
            el mercado y más.
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
            Concepto
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont Text">
            <span>Creamos un concepto poderoso</span>Fusinamos creatividad y
            estrategia <br /> para generar ideas efectivas que <br /> reflejen
            la escencia de la marca.
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
            Construcción
          </h4>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont  Text Mobile">
            <span>Una experiencia de marca integral.</span>Cada elemento de
            comunicación es <br /> diseñado para lograr un resultado <br />{" "}
            cohesivo y único.
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text-MediumFont Text Desktop">
            <span>Una experiencia de marca integral.</span>Cada elemento de
            comunicación
            <br /> es diseñado para lograr un <br /> resultado cohesivo y único.
          </p>
        </div>
      </div>
    </div>
  );
}
