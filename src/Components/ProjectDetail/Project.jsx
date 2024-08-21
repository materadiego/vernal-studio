import { useState, useEffect } from "react";
import arrowDown from "../../Assets/Images/projects-arrow-down.svg";
import ProjectTemplateOne from "../ProjectTemplates/ProjectTemplateOne";
import ProjectTemplateThree from "../ProjectTemplates/ProjectTemplateThree";
import ProjectTemplateTwo from "../ProjectTemplates/ProjectTemplateTwo";

export default function Project({ more, setMore, langEn, ...project }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [project.id]);

  function toggleMore() {
    setMore(!more);
  }

  const projectTemplate = () => {
    switch (project.templateNumber) {
      case "1":
        return (
          <ProjectTemplateOne
            key={project.id}
            project={project}
            langEn={langEn}
          />
        );
      case "2":
        return (
          <ProjectTemplateTwo
            key={project.id}
            project={project}
            langEn={langEn}
          />
        );
      case "3":
        return (
          <ProjectTemplateThree
            key={project.id}
            project={project}
            langEn={langEn}
          />
        );
      default:
        return <h6>Error al cargar las imágenes</h6>;
    }
  };

  const renderMore = (more) => {
    if (!more) {
      return langEn ? "Read more" : "Leer más";
    } else if (more) {
      return langEn ? "Read less" : "Leer menos";
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
            {langEn ? project.projectSubtitleEn : project.projectSubtitleEs}
          </p>
          <p className="ProjectDetail-Container__Subcontainer--Text Text">
            {langEn ? project.description1En : project.description1Es}
          </p>
          <p
            className={`ProjectDetail-Container__Subcontainer--Text Description2 Text ${
              more ? "DescriptionActive" : ""
            }`}
          >
            {langEn ? project.description2En : project.description2Es} <br />{" "}
            {langEn ? project.description3En : project.description3Es}
          </p>

          <div
            className={`ProjectDetail-Container__Subcontainer--TextMoreButton `}
            onClick={toggleMore}
          >
            {renderMore(more)}
            <img
              src={arrowDown}
              alt="arrow-down"
              className={`${
                more ? "TextMoreButton--ArrowUp" : "TextMoreButton--ArrowDown"
              }`}
            ></img>
          </div>
          <div className="ProjectDetail-Container__Subcontainer--ProjectLabels">
            <p className=" ProjectLabels-Text Desktop">
              {langEn ? "The project" : "El proyecto"}
            </p>
            <p className=" ProjectLabels-Text">
              {langEn ? "Services" : "Servicios"}
            </p>
            <p className=" ProjectLabels-Text">{langEn ? "City" : "Ciudad"}</p>
          </div>
          <div className="ProjectServicesLocation">
            <div className="ProjectServicesLocation__Services">
              <p className="ProjectServicesLocation__Services--Text">
                {langEn ? project.service1En : project.service1Es}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {langEn ? project.service2En : project.service2Es}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {langEn ? project.service3En : project.service3Es}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {langEn ? project.service4En : project.service4Es}
              </p>
              <p className="ProjectServicesLocation__Services--Text">
                {langEn ? project.service5En : project.service5Es}
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
