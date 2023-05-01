import HeroImage from "../../Assets/Images/home-hero-bg.webp";
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
            className="HomeHeroContainer__Media--Link"
          >
            <img alt="Instagram" className="Hero-Ig" src={HeroIg}></img>
          </a>
          <a href="www.behance.com" className="HomeHeroContainer__Media--Link">
            <img alt="Behance" className="Hero-Be" src={HeroBe}></img>
          </a>
          <a href="www.linkedin.com" className="HomeHeroContainer__Media--Link">
            <img alt="Linkedin" className="Hero-In" src={HeroIn}></img>
          </a>
        </div>
        <p className="HomeHeroContainer__Title">
          Transformamos ideas en marcas con personalidad
        </p>
        <p className="HomeHeroContainer__Subtitle">
          <span>Estudio boutique creativo</span>Branding. UX. Social media &
          más.
        </p>
        <div className="HomeHeroContainer__ImageContainer">
          <img
            alt="Background"
            src={HeroImage}
            className="HomeHeroContainer__ImageContainer--Image"
          ></img>
        </div>
        <div className="HomeHeroContainer__Block1"></div>
        <div className="HomeHeroContainer__Block2"></div>
      </div>
    </div>
  );
}
