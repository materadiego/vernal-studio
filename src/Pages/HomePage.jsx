import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HomeHero from "../Components/HomeHero/HomeHero";
import HomeMetodology from "../Components/HomeMetodology/HomeMetodology";
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import HomeServices from "../Components/HomeServices/HomeServices";
import Contact from "../Components/Contact/Contact";
import "../scss/Pages/HomePage.scss";

export default function HomePage({ langEn }) {
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
        <HomeHero langEn={langEn} />
      </div>
      <div ref={aboutUs}>
        <HomeProjects langEn={langEn} />
      </div>
      <div ref={services}>
        <HomeServices langEn={langEn} />
      </div>
      <div ref={approach}>
        <HomeMetodology langEn={langEn} />
      </div>
      <div ref={contact}>
        <Contact langEn={langEn} />
      </div>
    </>
  );
}
