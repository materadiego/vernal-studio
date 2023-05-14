import logoVernal from "../../Assets/Images/logo-vernal-white.svg";
import arrow from "../../Assets/Images/button-arrow-black.svg";
import footerIg from "../../Assets/Images/media-ig-black.svg";
import footerBe from "../../Assets/Images/media-be-black.svg";
import footerIn from "../../Assets/Images/media-in-black.svg";
import arrowUp from "../../Assets/Images/arrow.svg";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <div className="FooterContainer__LogoSubcontainer">
          <img
            src={logoVernal}
            alt="Logo"
            className="FooterContainer__LogoSubcontainer--Image"
          ></img>
          <p className="FooterContainer__LogoSubcontainer--Text">
            <span>Estudio boutique creativo</span>Branding. UX. Social media &
            más.
          </p>
        </div>
        <div className="FooterContainer__ContactSubcontainer">
          <p className="FooterContainer__ContactSubcontainer--Title">
            Contacto
          </p>
          <p className="FooterContainer__ContactSubcontainer--Text">
            <span>e:</span> hello@vernalstudio.com
          </p>
          <p className="FooterContainer__ContactSubcontainer--Text">
            <span>t:</span> +54 9 11 6457 2427
          </p>
          <p className="FooterContainer__ContactSubcontainer--Location">
            {" "}
            Caamaño 1100, Pilar, Buenos Aires
          </p>
        </div>
        <div className="FooterContainer__SiteMapSubcontainer">
          <p className="FooterContainer__SiteMapSubcontainer--Title">
            Mapa de sitio
          </p>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Nosotros</p>
            <img src={arrow} alt="arrow"></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Proyectos</p>
            <img src={arrow} alt="arrow"></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Metodología</p>
            <img src={arrow} alt="arrow"></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Contacto</p>
            <img src={arrow} alt="arrow"></img>
          </a>
        </div>
        <div className="FooterContainer__MediaSubcontainer">
          <p className="FooterContainer__MediaSubcontainer--Title">
            ¡Seguinos!
          </p>
          <a href="#home" className="FooterContainer__MediaSubcontainer--Link">
            <img src={footerIg} alt="Instagram" className="Footer-Ig"></img>
          </a>
          <a href="#home" className="FooterContainer__MediaSubcontainer--Link">
            <img src={footerBe} alt="Behance" className="Footer-Be"></img>
          </a>
          <a href="#home" className="FooterContainer__MediaSubcontainer--Link">
            <img src={footerIn} alt="Linkedin" className="Footer-In"></img>
          </a>
        </div>
        <a href="#header" className="FooterContainer__ArrowUp">
          <img
            src={arrowUp}
            alt="Arrow-Up"
            className="FooterContainer__ArrowUp--Image"
          ></img>
        </a>
      </div>
    </footer>
  );
}
