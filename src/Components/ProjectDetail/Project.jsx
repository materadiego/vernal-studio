import { useState } from "react";
import arrowDown from "../../Assets/Images/projects-arrow-down.svg";
import ProjectTemplateOne from "../ProjectTemplates/ProjectTemplateOne";
import ProjectTemplateThree from "../ProjectTemplates/ProjectTemplateThree";
import ProjectTemplateTwo from "../ProjectTemplates/ProjectTemplateTwo";

export default function Project({ ...project }) {
  const [more, setMore] = useState(false);
  const projectTemplate = () => {
    switch (project.templateNumber) {
      // case "one":   return <ComponentA />;
      // case "two":   return <ComponentB />;
      // case "three": return <ComponentC />;

      case "1":
        return <ProjectTemplateOne key={project.id} project={project} />;
      case "2":
        return <ProjectTemplateTwo />;
      case "3":
        return <ProjectTemplateThree />;

      default:
        return <h6>Error al cargar las imágenes</h6>;
    }
  };

  function toggleMore() {
    setMore(true);
  }

  return (
    <div className="ProjectDetail">
      <div className="ProjectDetail-Container">
        <div className="ProjectDetail-Container__Image">
          {" "}
          <h1 className="Title">{project.projectName}</h1>
        </div>
        {/* <img
          src={project.heroImage}
          alt={project.projectName}
          className="ProjectDetail-Container__Image"
        ></img> */}
        <p className="ProjectDetail-Container__Title Title">
          {project.projectName}
        </p>
        <div className="ProjectDetail-Container__Subcontainer">
          <p className="ProjectDetail-Container__Subcontainer--Subtitle Title">
            {project.projectSubtitle}
          </p>
          <p className="ProjectDetail-Container__Subcontainer--Text Text">
            {project.description1}
          </p>
          <p
            className={`ProjectDetail-Container__Subcontainer--Text Description2 Text ${
              more ? "DescriptionActive" : ""
            }`}
          >
            {project.description2}
          </p>
          <div
            className={`ProjectDetail-Container__Subcontainer--TextMoreButton ${
              more ? "MoreButtonInactive" : ""
            }`}
            onClick={toggleMore}
          >
            Leer más <img src={arrowDown} alt="arrow-down"></img>
          </div>
          <div className="ProjectDetail-Container__Subcontainer--ProjectLabels">
            <p className=" ProjectLabels-Text Desktop">El proyecto</p>
            <p className=" ProjectLabels-Text">Servicios</p>
            <p className=" ProjectLabels-Text">Ciudad</p>
          </div>
          <div className="ProjectServicesLocation">
            <div className="ProjectServicesLocation__Services">
              <p className="ProjectServicesLocation__Services--Text">
                {project.service1}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {project.service2}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {project.service3}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {project.service4}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {project.service5}
              </p>
            </div>
            <div className="ProjectServicesLocation__Location">
              <p className="ProjectServicesLocation__Location--Text">
                {project.location}
              </p>
            </div>
          </div>
        </div>
        {projectTemplate()}
      </div>
    </div>
  );
}
