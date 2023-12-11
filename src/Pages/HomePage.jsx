import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HomeHero from "../Components/HomeHero/HomeHero";
import HomeMetodology from "../Components/HomeMetodology/HomeMetodology";
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import HomeServices from "../Components/HomeServices/HomeServices";
import Contact from "../Components/Contact/Contact";
import "../scss/Pages/HomePage.scss";

export default function HomePage() {
  const home = useRef(null);
  const aboutUs = useRef(null);
  const services = useRef(null);
  const approach = useRef(null);
  const contact = useRef(null);

  let location = useLocation();
  console.log(location);

  function goTo(param) {
    param.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    let pathname = location.pathname;
    if (pathname === "/about-us") {
      goTo(aboutUs);
    } else if (pathname === "/services") {
      goTo(services);
    } else if (pathname === "/approach") {
      goTo(approach);
    } else if (pathname === "/contact") {
      goTo(contact);
    } else {
      goTo(home);
    }
  }, [location]);

  return (
    <>
      <div ref={home}>
        <HomeHero />
      </div>
      <div ref={aboutUs}>
        <HomeProjects />
      </div>
      <div ref={services}>
        <HomeServices />
      </div>
      <div ref={approach}>
        <HomeMetodology />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
  );
}
