import { useEffect, useState } from "react";
import { getCategories, getProjects } from "../../Utils/projects";
import loader from "../../Assets/Images/loader.svg";
import ProjectPreview from "./ProjectPreview";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [categoryNumbers, setCategoryNumbers] = useState([0, 0, 0, 0]);
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => setCategoryNumbers(res))
      .catch((error) => console.log(error));

    getProjects(query)
      .then((res) => setProjects(res))
      .then((res) => {})
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <>
      <h2 className="Projects-SectionTitle SectionTitle Projects-SectionTitle-Animation ">
        <span className="SectionTitle__Circle"></span> Proyectos
      </h2>
      <h3 className="ProjectsList--Title ProjectsList--Title1 Span-Animation Title-BigFont Title Mobile">
        <span className="Span-Animation-Block">Conocé las</span>
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title2 Span-Animation Title-BigFont Title Mobile">
        <span className="Span-Animation-Block">marcas que</span>
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title3 Span-Animation Title-BigFont Title Mobile">
        <span className="Span-Animation-Block">transformamos.</span>
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title1 Span-Animation Title-BigFont Title Desktop">
        <span className="Span-Animation-Block">Conocé las marcas que</span>
      </h3>
      <h3 className="ProjectsList--Title ProjectsList--Title2 Span-Animation Title-BigFont Title Desktop">
        <span className="Span-Animation-Block">transformamos</span>
      </h3>
      <div className="ProjectsList-Categories ProjectsList-Categories-Animation">
        <div
          className="ProjectsList-Categories__Container"
          onClick={() => setQuery("")}
        >
          <p
            className={`ProjectsList-Categories__Container--Category ${
              query === "" && "Active-Category"
            }`}
          >
            Todas
          </p>
          <p
            className={`ProjectsList-Categories__Container--Number ${
              query === "" && "Active-CategoryNumber"
            }`}
          >
            {categoryNumbers[0]}
          </p>
        </div>
        <div
          onClick={() => setQuery("Branding")}
          className="ProjectsList-Categories__Container"
        >
          <p
            className={`ProjectsList-Categories__Container--Category ${
              query === "Branding" && "Active-Category"
            }`}
          >
            Branding
          </p>
          <p
            className={`ProjectsList-Categories__Container--Number ${
              query === "Branding" && "Active-CategoryNumber"
            }`}
          >
            {categoryNumbers[1]}
          </p>
        </div>
        <div
          onClick={() => setQuery("Web&Ecommerce")}
          className="ProjectsList-Categories__Container"
        >
          <p
            className={`ProjectsList-Categories__Container--Category ${
              query === "Web&Ecommerce" && "Active-Category"
            }`}
          >
            Web & Ecommerce
          </p>
          <p
            className={`ProjectsList-Categories__Container--Number ${
              query === "Web&Ecommerce" && "Active-CategoryNumber"
            }`}
          >
            {categoryNumbers[2]}
          </p>
        </div>
        <div
          className="ProjectsList-Categories__Container"
          onClick={() => setQuery("Apps")}
        >
          <p
            className={`ProjectsList-Categories__Container--Category ${
              query === "Apps" && "Active-Category"
            }`}
          >
            Apps
          </p>
          <p
            className={`ProjectsList-Categories__Container--Number ${
              query === "Apps" && "Active-CategoryNumber"
            }`}
          >
            {categoryNumbers[3]}
          </p>
        </div>
      </div>
      <div className="ProjectList-Contaier ProjectList-Contaier-Animation">
        {loading ? (
          <img src={loader} alt="Loading.." className="Loader"></img>
        ) : (
          projects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))
        )}
      </div>
    </>
  );
}
