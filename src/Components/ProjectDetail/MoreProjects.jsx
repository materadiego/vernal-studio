export default function MoreProjects() {
  return (
    <div className="MoreProjectsContainer">
      <p className="MoreProjectsContainer__Text Title">¿Querés ver más?</p>
      {/* MORE BUTTON */}
      <div className="MoreProjectsContainer__MoreButton Button ">
        <div className="MoreProjectsContainer__MoreButton--Arrow Button-Arrow"></div>
        <p className="MoreProjectsContainer__MoreButton--Text Button-Text">
          SIGUIENTE PROYECTO
        </p>
      </div>
    </div>
  );
}
