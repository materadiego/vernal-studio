import HeroImageMobile from "../../Assets/Images/home-hero-img-mobile.webp";
import HeroImageDesktop from "../../Assets/Images/home-hero-img-desktop.webp";

import HeroIg from "../../Assets/Images/media-ig-grey.svg";
import HeroBe from "../../Assets/Images/media-be-grey.svg";
import HeroIn from "../../Assets/Images/media-in-grey.svg";

export default function HomeHero() {
  return (
    <div className="HomeHero">
      <div className="HomeHeroContainer">
        <div className="HomeHeroContainer__Media">
          <a
            href="www.instagram.com"
            className="HomeHeroContainer__Media--Link Media-Container-Animation"
          >
            <span className="Hero-Media-Animation Media-Animation"></span>
            <img
              alt="Instagram"
              className="Hero-Ig Hero-Media-Image"
              src={HeroIg}
            ></img>
          </a>
          <a
            href="www.behance.com"
            className="HomeHeroContainer__Media--Link Media-Container-Animation "
          >
            <span className="Hero-Media-Animation Media-Animation"></span>

            <img
              alt="Behance"
              className="Hero-Be Hero-Media-Image"
              src={HeroBe}
            ></img>
          </a>
          <a
            href="www.linkedin.com"
            className="HomeHeroContainer__Media--Link Media-Container-Animation"
          >
            <span className="Hero-Media-Animation Media-Animation"></span>

            <img
              alt="Linkedin"
              className="Hero-In Hero-Media-Image"
              src={HeroIn}
            ></img>
          </a>
        </div>
        <p className="HomeHeroContainer__Title Mobile">
          Transformamos tu marca en <br /> una identidad inolvidable.
        </p>
        <p className="HomeHeroContainer__Title HeroTitle1 Desktop">
          {" "}
          <span></span>Transformamos tu
        </p>
        <p className="HomeHeroContainer__Title HeroTitle2 Desktop">
          <span></span> marca en una identidad
        </p>
        <p className="HomeHeroContainer__Title HeroTitle3 Desktop">
          <span></span>inolvidable.
        </p>
        <p className="HomeHeroContainer__Subtitle">
          <span>Estudio boutique creativo</span>Branding. UX. Social media &
          más.
        </p>
        <div className="HomeHeroContainer__ImageContainer">
          <div className="HomeHeroContainer__ImageContainer--Image">
            <img
              alt="Background"
              src={HeroImageMobile}
              className="Mobile Hero-Image"
            ></img>
            <img
              alt="Background"
              src={HeroImageDesktop}
              className="Desktop Hero-Image"
            ></img>
          </div>
        </div>
        <div className="HomeHeroContainer__Block1"></div>
        <div className="HomeHeroContainer__Block2"></div>
      </div>
    </div>
  );
}
