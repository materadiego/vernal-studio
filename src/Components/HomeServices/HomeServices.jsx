import TitleLine from "../../Assets/Images/sectiontitle-line.svg";

export default function HomeServices() {
  return (
    <div className="HomeServices">
      <div className="HomeServicesContainer">
        <p className="HomeServicesContainer__SectionTitle SectionTitle">
          Servicios <img src={TitleLine} alt="Icon"></img>
        </p>
        <p className="HomeServicesContainer__Description">
          A full-cycle digital service agency. We do from design to end-to-end
          development to maintenance.
        </p>

        <div className="HomeServicesContainer__Subcontainer">
          <p className="HomeServicesContainer__Subcontainer--Title">Branding</p>
          <div className="HomeServicesContainer__Subcontainer--Image Services-Image-Left"></div>
          <p className="HomeServicesContainer__Subcontainer--Title">
            Web design
          </p>
          <div className="HomeServicesContainer__Subcontainer--Image Services-Image-Right"></div>
          <p className="HomeServicesContainer__Subcontainer--Title">UX/UI</p>
          <div className="HomeServicesContainer__Subcontainer--Image Services-Image-Left"></div>
          <p className="HomeServicesContainer__Subcontainer--Title">
            Social Media
          </p>
          <div className="HomeServicesContainer__Subcontainer--Image Services-Image-Right"></div>
        </div>
      </div>
    </div>
  );
}
