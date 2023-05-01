import TitleLine from "../../Assets/Images/sectiontitle-line.svg";

export default function HomeMetodology() {
  return (
    <div className="HomeMetodology">
      <div className="HomeMetodologyContainer">
        <p className="HomeMetodologyContainer__SectionTitle SectionTitle">
          Metodología <img src={TitleLine} alt="Icon"></img>
        </p>
        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">01</p>
          <p className="HomeMetodologyContainer__Subcontainer--Title">
            Empatizamos
          </p>
          <div className="HomeMetodologyContainer__Subcontainer--Button"></div>
        </div>
        <div className="HomeMetodologyContainer__Subcontainer--Line"></div>
        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">02</p>
          <p className="HomeMetodologyContainer__Subcontainer--Title">
            Investigamos
          </p>
          <div className="HomeMetodologyContainer__Subcontainer--Button"></div>
        </div>
        <div className="HomeMetodologyContainer__Subcontainer--Line"></div>

        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">03</p>
          <p className="HomeMetodologyContainer__Subcontainer--Title">
            Conceptualizamos
          </p>
          <div className="HomeMetodologyContainer__Subcontainer--Button"></div>
        </div>
        <div className="HomeMetodologyContainer__Subcontainer--Line"></div>

        {/* SUBCONTAINER */}
        <div className="HomeMetodologyContainer__Subcontainer">
          <p className="HomeMetodologyContainer__Subcontainer--Number">04</p>
          <p className="HomeMetodologyContainer__Subcontainer--Title">
            Creamos
          </p>
          <div className="HomeMetodologyContainer__Subcontainer--Button"></div>
        </div>
      </div>
    </div>
  );
}
