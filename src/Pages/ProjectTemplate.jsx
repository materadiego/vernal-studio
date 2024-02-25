import { useState } from "react";
import { getProject } from "../Utils/projects";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MoreProjects from "../Components/ProjectDetail/MoreProjects";
import Project from "../Components/ProjectDetail/Project";
import "../scss/Pages/ProjectTemplate.scss";

import Contact from "../Components/Contact/Contact";

export default function ProjectTemplate() {
  let location = useLocation();
  const pathname = location.pathname;
  const [more, setMore] = useState(false);
  const [project, setProject] = useState({});
  const { route } = useParams();
  useEffect(() => {
    getProject(route).then((res) => {
      setProject(res);
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="ProjectTemplate">
      <Project {...project} more={more} setMore={setMore} />
      <MoreProjects {...project} setMore={setMore} />
      <Contact />
    </div>
  );
}
