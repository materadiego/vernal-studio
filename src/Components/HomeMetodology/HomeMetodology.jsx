import TitleLine from "../../Assets/Images/sectiontitle-line.svg";

export default function HomeMetodology() {
  return (
    <div className="HomeMetodology">
      <div className="HomeMetodologyContainer">
        {/* SECTION TITLE */}
        <p className="HomeMetodologyContainer__SectionTitle SectionTitle">
          Approach <img src={TitleLine} alt="Icon"></img>
        </p>
        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">01</p>
          <div className="HomeMetodologyContainer__Subcontainer--Line"></div>

          <p className="HomeMetodologyContainer__Subcontainer--Title Title">
            Conexión
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text Mobile">
            <span>El primer paso es conocernos.</span>Aprendemos acerca de tus
            objetivos y expectativas para crear un plan de trabajo
            personalizado.
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text Desktop">
            <span>El primer paso es conocernos.</span>Aprendemos acerca de tus
            objetivos <br /> y expectativas para crear un plan
            <br /> de trabajo personalizado.
          </p>
        </div>
        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">02</p>
          <div className="HomeMetodologyContainer__Subcontainer--Line"></div>

          <p className="HomeMetodologyContainer__Subcontainer--Title Title">
            Perspectiva
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text">
            <span>Un plan de impacto requiere perspectiva.</span>Investigamos
            sobre tus consumidores, tendencias relevantes, competidores, <br />{" "}
            el mercado y más.
          </p>
        </div>
        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">03</p>
          <div className="HomeMetodologyContainer__Subcontainer--Line"></div>

          <p className="HomeMetodologyContainer__Subcontainer--Title Title">
            Concepto
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text">
            <span>Creamos un concepto poderoso</span>Fusinamos creatividad y
            estrategia <br /> para generar ideas efectivas que <br /> reflejen
            la escencia de la marca.
          </p>
        </div>
        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">04</p>
          <div className="HomeMetodologyContainer__Subcontainer--Line"></div>

          <p className="HomeMetodologyContainer__Subcontainer--Title Title">
            Construcción
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text Mobile">
            <span>Una experiencia de marca integral.</span>Cada elemento de
            comunicación es <br /> diseñado para lograr un resultado <br />{" "}
            cohesivo y único.
          </p>
          <p className="HomeMetodologyContainer__Subcontainer--Text Text Desktop">
            <span>Una experiencia de marca integral.</span>Cada elemento de
            comunicación
            <br /> es diseñado para lograr un <br /> resultado cohesivo y único.
          </p>
        </div>
      </div>
    </div>
  );
}
