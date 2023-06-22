import logoVernal from "../../Assets/Images/logo-vernal-white.svg";
import arrow from "../../Assets/Images/button-arrow-black.svg";
import footerIg from "../../Assets/Images/media-ig-black.svg";
import footerBe from "../../Assets/Images/media-be-black.svg";
import footerIn from "../../Assets/Images/media-in-black.svg";
import arrowUp from "../../Assets/Images/arrow-up.svg";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        {/* LOGO */}
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
        {/* CONTACT SECTION */}
        <div className="FooterContainer__ContactSubcontainer">
          <h4 className="FooterContainer__ContactSubcontainer--Title Footer-Title Title">
            Contacto
          </h4>
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
        {/* SITEMAP SECTION */}
        <div className="FooterContainer__SiteMapSubcontainer">
          <h4 className="FooterContainer__SiteMapSubcontainer--Title Footer-Title Title">
            Mapa de sitio
          </h4>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Nosotros</p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Proyectos</p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Metodología</p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p>Contacto</p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </a>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="FooterContainer__MediaSubcontainer">
          <h4 className="FooterContainer__MediaSubcontainer--Title Footer-Title Title">
            ¡Seguinos!
          </h4>
          <a
            href="#home"
            className="FooterContainer__MediaSubcontainer--Link Media-Container-Animation"
          >
            <span className="Footer-Media-Animation Media-Animation"></span>
            <img
              src={footerIg}
              alt="Instagram"
              className="Media-Ig Footer-Media-Image"
            ></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__MediaSubcontainer--Link Media-Container-Animation"
          >
            <span className="Footer-Media-Animation Media-Animation"></span>
            <img
              src={footerBe}
              alt="Behance"
              className="Media-Be Footer-Media-Image"
            ></img>
          </a>
          <a
            href="#home"
            className="FooterContainer__MediaSubcontainer--Link Media-Container-Animation"
          >
            <span className="Footer-Media-Animation Media-Animation"></span>
            <img
              src={footerIn}
              alt="Linkedin"
              className="Media-In Footer-Media-Image"
            ></img>
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
