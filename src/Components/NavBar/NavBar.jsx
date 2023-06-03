import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoVernal from "../../Assets/Images/logo-vernal-white.svg";
import logoMenu from "../../Assets/Images/logo-vernal-black.png";
import closeMenu from "../../Assets/Images/menu-close.png";
import languageArrowD from "../../Assets/Images/arrow.svg";
import languageArrowW from "../../Assets/Images/arrow-white.svg";
import Ig from "../../Assets/Images/media-ig-white.svg";
import Be from "../../Assets/Images/media-be-white.svg";
import In from "../../Assets/Images/media-in-white.svg";
import Wsp from "../../Assets/Images/media-wsp-white.svg";
import MenuButton from "../../Assets/Images/menu-button.svg";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    setZIndex(true);
    setMenuButton(!menuButton);
    setMenuIsActive(!menuIsActive);
  };

  return (
    <header className="NavBar" id="header">
      <div className="NavBarContainer">
        {/* HEADER MENU BUTTON */}
        <div
          className="NavBarContainer__MenuButton Header-Animation"
          onClick={toggleMenu}
        >
          <img
            className="NavBarContainer__MenuButton--Image"
            alt="Menu"
            src={MenuButton}
          ></img>
        </div>
        {/* HEADER LOGO */}
        <div className="NavBarContainer__Logo Header-Animation">
          <img
            className="NavBarContainer__Logo--Image"
            src={logoVernal}
            alt="logo"
          ></img>
        </div>
        {/* HEADER LANGUAGE SELECT */}
        <div
          className="NavBarContainer__LanguageButton Header-Animation"
          id="language-button-desktop"
        >
          <p className="NavBarContainer__LanguageButton--Selected">
            ES <img src={languageArrowD} alt="language-selector"></img>
          </p>
          <div className="NavBarContainer__LanguageButton--Options desktop-lang-1">
            EN
          </div>
          <div className="NavBarContainer__LanguageButton--Options desktop-lang-2">
            PT
          </div>
        </div>
      </div>
      {/* MENU */}
      <div
        style={{ zIndex }}
        id={`${zIndex ? "MenuContainer" : "MenuContainerZIndex"}`}
        className={`Menu ${menu ? "MenuIsActive" : "Menu-Animation"}`}
      >
        <div className="MenuContainer">
          <div className="MenuContainer__Top">
            {/* CLOSE BUTTON */}
            <div
              className={`MenuContainer__Top--CloseButton ${
                menu
                  ? "Navbar-ButtonIcon-AnimationIn"
                  : "Navbar-ButtonIcon-AnimationOut"
              }`}
              onClick={toggleMenu}
            >
              <img alt="Close" className="CloseButton" src={closeMenu}></img>
            </div>
            {/* LOGO */}
            <img
              className={`MenuContainer__Top--Logo ${
                menu ? "Navbar-Logo-AnimationIn" : "Navbar-Logo-AnimationOut"
              }`}
              alt="Logo"
              src={logoMenu}
            ></img>
            {/* LANGUAGE */}
            <div
              className={`MenuContainer__Top--LanguageButton ${
                menu
                  ? "Navbar-Language-AnimationIn"
                  : "Navbar-Language-AnimationOut"
              }`}
            >
              ES <img src={languageArrowW} alt="language-selector"></img>
            </div>
          </div>
          {/* MENU OPTIONS */}
          <div className="MenuContainer__Links">
            <a
              href="#Nosotros"
              className={`MenuContainer__Links--Options  ${
                menu ? "Navbar-Links-AnimationIn" : "Navbar-Links-AnimationOut"
              }`}
            >
              Nosotros
            </a>
            <a
              href="#Nosotros"
              className={`MenuContainer__Links--Options   ${
                menu ? "Navbar-Links-AnimationIn" : "Navbar-Links-AnimationOut"
              }`}
            >
              Proyectos
            </a>
            <a
              href="#Nosotros"
              className={`MenuContainer__Links--Options   ${
                menu ? "Navbar-Links-AnimationIn" : "Navbar-Links-AnimationOut"
              }`}
            >
              Servicios
            </a>
            <a
              href="#Nosotros"
              className={`MenuContainer__Links--Options   ${
                menu ? "Navbar-Links-AnimationIn" : "Navbar-Links-AnimationOut"
              }`}
            >
              Metodología
            </a>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="MenuContainer__Media">
            <div
              className={`MenuContainer__Media--Line ${
                menu
                  ? "Navbar-MediaLine-AnimationIn"
                  : "Navbar-MediaLine-AnimationOut"
              }`}
            ></div>
            <a
              className="MenuContainer__Media--Link  Media-Container-Animation"
              href="www.instagram.com"
            >
              {" "}
              <span className="Menu-Media-Animation Media-Animation"></span>
              <img
                alt="Instagram"
                src={Ig}
                className={`Media-Ig Menu-Ig Social-Media-Image ${
                  menu
                    ? "Navbar-MediaLinks-AnimationIn"
                    : "Navbar-MediaLinks-AnimationOut"
                }`}
              ></img>
            </a>
            <a
              className="MenuContainer__Media--Link  Media-Container-Animation"
              href="www.behance.com"
            >
              {" "}
              <span className="Menu-Media-Animation Media-Animation"></span>
              <img
                alt="Behance"
                src={Be}
                className={`Media-Be Menu-Be Social-Media-Image ${
                  menu
                    ? "Navbar-MediaLinks-AnimationIn"
                    : "Navbar-MediaLinks-AnimationOut"
                }`}
              ></img>
            </a>
            <a
              className="MenuContainer__Media--Link  Media-Container-Animation"
              href="www.linkedin.com"
            >
              {" "}
              <span className="Menu-Media-Animation Media-Animation"></span>
              <img
                alt="Linkedin"
                src={In}
                className={`Media-In Menu-In Social-Media-Image ${
                  menu
                    ? "Navbar-MediaLinks-AnimationIn"
                    : "Navbar-MediaLinks-AnimationOut"
                }`}
              ></img>
            </a>
            <a
              className="MenuContainer__Media--Link  Media-Container-Animation"
              href="www.whatsapp.com"
            >
              {" "}
              <span className="Menu-Media-Animation Media-Animation"></span>
              <img
                alt="WhatsApp"
                src={Wsp}
                className={`Media-Wsp Menu-Wsp Social-Media-Image ${
                  menu
                    ? "Navbar-MediaLinks-AnimationIn"
                    : "Navbar-MediaLinks-AnimationOut"
                }`}
              ></img>
            </a>
          </div>
          {/* MENU CONTACT */}
          <div className="MenuContainer__Contact Button">
            <div
              className={`MenuContainer__Contact--Arrow Button-Arrow ${
                menu
                  ? "Navbar-ButtonIcon-AnimationIn"
                  : "Navbar-ButtonIcon-AnimationOut"
              }`}
            ></div>
            <p
              className={`MenuContainer__Contact--Text Button-Text ${
                menu
                  ? "Navbar-ButtonText-AnimationIn"
                  : "Navbar-ButtonText-AnimationOut"
              }`}
            >
              ESCRIBINOS
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}