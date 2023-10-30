import { useState } from "react";
import { getProject } from "../Utils/projects";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MoreProjects from "../Components/ProjectDetail/MoreProjects";
import Project from "../Components/ProjectDetail/Project";
import "../scss/Pages/ProjectTemplate.scss";

import Contact from "../Components/Contact/Contact";

export default function ProjectTemplate() {
  const [more, setMore] = useState(false);
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProject(id).then((res) => {
      setProject(res);
    });
  });

  return (
    <div className="ProjectTemplate">
      <Project {...project} more={more} setMore={setMore} />
      <MoreProjects {...project} setMore={setMore} />
      <Contact />
    </div>
  );
}
