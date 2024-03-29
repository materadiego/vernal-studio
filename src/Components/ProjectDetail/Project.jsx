import { useState, useEffect } from "react";
import arrowDown from "../../Assets/Images/projects-arrow-down.svg";
import ProjectTemplateOne from "../ProjectTemplates/ProjectTemplateOne";
import ProjectTemplateThree from "../ProjectTemplates/ProjectTemplateThree";
import ProjectTemplateTwo from "../ProjectTemplates/ProjectTemplateTwo";

export default function Project({
  more,
  setMore,

  ...project
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, [project.id]);

  function toggleMore() {
    setMore(!more);
  }

  const projectTemplate = () => {
    switch (project.templateNumber) {
      case "1":
        return <ProjectTemplateOne key={project.id} project={project} />;
      case "2":
        return <ProjectTemplateTwo key={project.id} project={project} />;
      case "3":
        return <ProjectTemplateThree key={project.id} project={project} />;
      default:
        return <h6>Error al cargar las imágenes</h6>;
    }
  };

  return (
    <div className={`ProjectDetail ${!loading && "appear"}`}>
      <div className="ProjectDetail-Container">
        <img
          src={project.imgPreview}
          alt={project.projectName}
          className="ProjectDetail-Container__Image Mobile ProjectDetail-Image-Animation"
        ></img>
        <img
          src={project.heroImage}
          alt={project.projectName}
          className="ProjectDetail-Container__Image Desktop ProjectDetail-Image-Animation"
        ></img>
        <p className="ProjectDetail-Container__Title ProjectDetail-Title-Animation Title">
          {project.projectName}
        </p>
        <div className="ProjectDetail-Container__Subcontainer ProjectDetail-Description-Animation">
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
            {project.description2} <br /> {project.description3}
          </p>

          <div
            className={`ProjectDetail-Container__Subcontainer--TextMoreButton `}
            onClick={toggleMore}
          >
            {more ? "Leer menos" : "Leer más"}{" "}
            <img
              src={arrowDown}
              alt="arrow-down"
              className={`${
                more ? "TextMoreButton--ArrowUp" : "TextMoreButton--ArrowDown"
              }`}
            ></img>
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
