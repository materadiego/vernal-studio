import HeroImageMobile from "../../Assets/Images/home-hero-img-mobile.webp";
import HeroImageDesktop from "../../Assets/Images/home-hero-img-desktop.webp";

import HeroIg from "../../Assets/Images/media-ig-grey.svg";
import HeroBe from "../../Assets/Images/media-be-grey.svg";
import HeroIn from "../../Assets/Images/media-in-grey.svg";

export default function HomeHero() {
  return (
    <div className="HomeHero">
      <div className="HomeHeroContainer">
        {/* SOCIAL MEDIA */}
        <div className="HomeHeroContainer__Media">
          <a
            href="www.instagram.com"
            className="HomeHeroContainer__Media--Link Media-Container-Animation"
          >
            <span className="Hero-Media-Animation Media-Animation"></span>
            <img
              alt="Instagram"
              className="Hero-Ig Social-Media-Image Hero-Media-Image Hero-MediaImg-Animation"
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
              className="Hero-Be Social-Media-Image Hero-Media-Image Hero-MediaImg-Animation"
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
              className="Hero-In Social-Media-Image Hero-Media-Image Hero-MediaImg-Animation"
              src={HeroIn}
            ></img>
          </a>
        </div>
        {/* HERO TITLE */}
        <h3 className="HomeHeroContainer__Title Title-Mobile-Animation Title Mobile ">
          Transformamos tu marca en <br /> una identidad inolvidable.
        </h3>
        <h3 className="HomeHeroContainer__Title Title HeroTitle1 Desktop Span-Animation">
          {" "}
          <span className="Span-Animation-Block"></span>Transformamos tu
        </h3>
        <h3 className="HomeHeroContainer__Title Title HeroTitle2 Desktop Span-Animation">
          <span className="Span-Animation-Block"></span> marca en una identidad
        </h3>
        <h3 className="HomeHeroContainer__Title Title HeroTitle3 Desktop Span-Animation">
          <span className="Span-Animation-Block"></span>inolvidable.
        </h3>
        {/* HERO SUBTITLE */}
        <h1 className="HomeHeroContainer__Subtitle Hero-Subtitle-Animation Text">
          <span>Estudio boutique creativo</span>Branding. UX. Social media &
          más.
        </h1>
        {/* IMAGE CONTAINER */}
        <div className="HomeHeroContainer__ImageContainer Image-Container-Animation">
          <div className="HomeHeroContainer__ImageContainer--Image Image-Animation">
            <img
              alt="Background"
              src={HeroImageMobile}
              className="Mobile Hero-Image Image-Img-Animation"
            ></img>
            <img
              alt="Background"
              src={HeroImageDesktop}
              className="Desktop Hero-Image Image-Img-Animation"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
