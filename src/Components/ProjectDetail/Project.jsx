import arrowDown from "../../Assets/Images/projects-arrow-down.svg";

export default function Project({ ...project }) {
  const projectTemplate = () => {
    switch (project.templateNumber) {
      // case "one":   return <ComponentA />;
      // case "two":   return <ComponentB />;
      // case "three": return <ComponentC />;

      case "1":
        return <h1>Template 1</h1>;
      case "2":
        return <h1>Template 2</h1>;
      case "3":
        return <h1>Template 3</h1>;

      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <div className="ProjectDetail">
      <div className="ProjectDetail-Container">
        <img
          src={project.heroImage}
          alt={project.projectName}
          className="ProjectDetail-Container__Image"
        ></img>
        <p className="ProjectDetail-Container__Title Title">
          {project.projectName}
        </p>
        <p className="ProjectDetail-Container__Subtitle Title">
          {project.projectSubtitle}
        </p>
        <p className="ProjectDetail-Container__Text Text">
          {project.description}
        </p>
        <span className="ProjectDetail-Container__TextMoreButton Title">
          Leer más <img src={arrowDown} alt="arrow-down"></img>
        </span>
        <div className="ProjectDetail-Container__ProjectLabels">
          <p className="ProjectDetail-Container__ProjectLabels--Text Desktop">
            El proyecto
          </p>
          <p className="ProjectDetail-Container__ProjectLabels--Text">
            Servicios
          </p>
          <p className="ProjectDetail-Container__ProjectLabels--Text">Ciudad</p>
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
        <div>{projectTemplate()}</div>
      </div>
    </div>
  );
}
