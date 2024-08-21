import { Link } from "react-router-dom";
import logoVernal from "../../Assets/Images/logo-vernal-white.svg";
import arrow from "../../Assets/Images/button-arrow-black.svg";
import footerIg from "../../Assets/Images/media-ig-black.svg";
import footerBe from "../../Assets/Images/media-be-black.svg";
import footerIn from "../../Assets/Images/media-in-black.svg";
import arrowUp from "../../Assets/Images/arrow-up.svg";
import ScrollToTop from "../../Utils/ScrollToTop";

export default function Footer({ langEn }) {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        {/* LOGO */}
        <div className="FooterContainer__LogoSubcontainer">
          <Link to="/home">
            <img
              src={logoVernal}
              alt="Logo"
              className="FooterContainer__LogoSubcontainer--Image"
            ></img>
          </Link>
          <p className="FooterContainer__LogoSubcontainer--Text Text-SmallFont">
            <span>
              {langEn
                ? "Creative Boutique Studio:"
                : "Estudio boutique creativo"}
            </span>
            {langEn
              ? "Branding, UX, Social Media & More."
              : "Branding. UX. Social media & más."}
          </p>
        </div>
        {/* CONTACT SECTION */}
        <div className="FooterContainer__ContactSubcontainer">
          <h4 className="FooterContainer__ContactSubcontainer--Title Footer-Title Title-SmallFont Title">
            {langEn ? "Contact us" : "Contacto"}
          </h4>
          <p className="FooterContainer__ContactSubcontainer--Text Text-SmallFont">
            <span>e:</span> hello@vernalstudio.com
          </p>
        </div>
        {/* SITEMAP SECTION */}
        <div className="FooterContainer__SiteMapSubcontainer">
          <h4 className="FooterContainer__SiteMapSubcontainer--Title Title-SmallFont Footer-Title Title">
            {langEn ? "Site Map" : "Mapa de sitio"}
          </h4>
          <Link
            to="/about-us"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p className="Text-SmallFont">{langEn ? "About Us" : "Nosotros"}</p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </Link>
          <Link
            to="/projects"
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p className="Text-SmallFont">
              {langEn ? "Projects" : "Proyectos"}
            </p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </Link>
          <Link
            to="/approach"
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p className="Text-SmallFont">Approach</p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </Link>
          <Link
            to="/services"
            href="#home"
            className="FooterContainer__SiteMapSubcontainer--Link"
          >
            <p className="Text-SmallFont">
              {langEn ? "Servicies" : "Servicios"}
            </p>
            <img src={arrow} alt="arrow" className="SiteMap-Arrow"></img>
          </Link>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="FooterContainer__MediaSubcontainer">
          <h4 className="FooterContainer__MediaSubcontainer--Title Title-SmallFont Footer-Title Title">
            {langEn ? "Follow us!" : "¡Seguinos!"}
          </h4>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/vernalstudio/"
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
            rel="noreferrer"
            target="_blank"
            href="https://www.behance.net/vernalstudio"
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
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/vernal-studio/about/"
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
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="FooterContainer__ArrowUp"
        >
          <img
            src={arrowUp}
            alt="Arrow-Up"
            className="FooterContainer__ArrowUp--Image"
          ></img>
        </div>
      </div>
    </footer>
  );
}
