import { useEffect, useRef, useState } from "react";

import HomeHero from "../Components/HomeHero/HomeHero";
import HomeMetodology from "../Components/HomeMetodology/HomeMetodology";
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import HomeServices from "../Components/HomeServices/HomeServices";
import "../scss/Pages/HomePage.scss";
import { useLocation } from "react-router-dom";
import Contact from "../Components/Contact/Contact";

export default function HomePage() {
  const home = useRef(null);
  const aboutUs = useRef(null);
  const services = useRef(null);
  const approach = useRef(null);
  const contact = useRef(null);

  let location = useLocation();

  function goTo(param) {
    param.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    console.log("cambio");
    let pathname = location.pathname;
    if (pathname === "/about-us") {
      console.log("About Us");
      goTo(aboutUs);
    } else if (pathname === "/services") {
      console.log("Services");
      goTo(services);
    } else if (pathname === "/approach") {
      console.log("Approach");
      goTo(approach);
    } else if (pathname === "/contact") {
      console.log("Contact");
      goTo(contact);
    } else {
      console.log("Home");
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
