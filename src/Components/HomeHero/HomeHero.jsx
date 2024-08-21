import HeroImageMobile from "../../Assets/Images/home-hero-img-mobile.webp";
import HeroImageDesktop from "../../Assets/Images/home-hero-img-desktop.webp";

import HeroIg from "../../Assets/Images/media-ig-grey.svg";
import HeroBe from "../../Assets/Images/media-be-grey.svg";
import HeroIn from "../../Assets/Images/media-in-grey.svg";

export default function HomeHero({ langEn }) {
  return (
    <div className="HomeHero">
      <div className="HomeHeroContainer">
        {/* SOCIAL MEDIA */}
        <div className="HomeHeroContainer__Media">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/vernalstudio/"
            className="HomeHeroContainer__Media--Link Media-Container-Animation"
          >
            <span className="Hero-Media-Animation Media-Animation"></span>
            <img
              alt="Instagram"
              className="Hero-Ig Media-Ig Social-Media-Image Hero-Media-Image Hero-MediaImg-Animation"
              src={HeroIg}
            ></img>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.behance.net/vernalstudio"
            className="HomeHeroContainer__Media--Link Media-Container-Animation "
          >
            <span className="Hero-Media-Animation Media-Animation"></span>

            <img
              alt="Behance"
              className="Hero-Be Media-Be Social-Media-Image Hero-Media-Image Hero-MediaImg-Animation"
              src={HeroBe}
            ></img>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/vernal-studio/about/"
            className="HomeHeroContainer__Media--Link Media-Container-Animation"
          >
            <span className="Hero-Media-Animation Media-Animation"></span>

            <img
              alt="Linkedin"
              className="Hero-In Social-Media-Image Media-In Hero-Media-Image Hero-MediaImg-Animation"
              src={HeroIn}
            ></img>
          </a>
        </div>
        {/* HERO TITLE */}
        <h3 className="HomeHeroContainer__Title Span-Animation HeroTitle1 Title Title-BigFont Mobile  ">
          <span className="Span-Animation-Block">
            {langEn ? "We turn your  " : "Transformamos"}
          </span>
        </h3>
        <h3 className="HomeHeroContainer__Title Span-Animation HeroTitle2 Title Title-BigFont Mobile ">
          <span className="Span-Animation-Block">
            {langEn ? "brand into an " : "tu marca en"}
          </span>
        </h3>
        <h3 className="HomeHeroContainer__Title Span-Animation HeroTitle3 Title Title-BigFont Mobile ">
          <span className="Span-Animation-Block">
            {langEn ? "unforgettable " : "una identidad"}
          </span>
        </h3>
        <h3 className="HomeHeroContainer__Title Span-Animation HeroTitle4 Title Title-BigFont Mobile ">
          <span className="Span-Animation-Block">
            {langEn ? "identity" : "inolvidable."}
          </span>
        </h3>
        <h3 className="HomeHeroContainer__Title Title HeroTitle1 Desktop Title-BigFont Span-Animation">
          {" "}
          <span className="Span-Animation-Block">
            {langEn ? "We turn your brand" : "Transformamos tu"}
          </span>
        </h3>
        <h3 className="HomeHeroContainer__Title Title HeroTitle2 Desktop Title-BigFont Span-Animation">
          <span className="Span-Animation-Block">
            {langEn ? "into an unforgettable" : "marca en una identidad"}
          </span>
        </h3>
        <h3 className="HomeHeroContainer__Title Title HeroTitle3 Desktop Title-BigFont Span-Animation">
          <span className="Span-Animation-Block">
            {langEn ? "identity" : "inolvidable."}
          </span>
        </h3>
        {/* HERO SUBTITLE */}
        <h1 className="HomeHeroContainer__Subtitle Hero-Subtitle-Animation Text-MediumFont Text">
          <span>
            {langEn ? "Creative Boutique Studio:" : "Estudio boutique creativo"}
          </span>
          {langEn
            ? "Branding, UX, Social Media & More."
            : "Branding. UX. Social media & más."}
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
