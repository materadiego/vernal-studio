import { useEffect } from "react";

import NavBar from "../Components/NavBar/NavBar";
import HomeHero from "../Components/HomeHero/HomeHero";
import HomeMetodology from "../Components/HomeMetodology/HomeMetodology";
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import HomeServices from "../Components/HomeServices/HomeServices";
import "../scss/Pages/HomePage.scss";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <HomeProjects />
      <HomeServices />
      <HomeMetodology />
    </>
  );
}
