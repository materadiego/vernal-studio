import { useState } from "react";
import Loader from "../../Assets/Images/loader.svg";

export default function Contact({ langEn }) {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    Name: "",
    Mail: "",
    Message: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = async (event) => {
    event.preventDefault();
    setResponse(
      <img alt="loader" className="ContactForm-Loader" src={Loader}></img>
    );
    const res = await fetch(
      "https://formsubmit.co/ajax/hello@vernalstudio.com",
      {
        method: "post",
        body: new FormData(event.target),
      }
    );

    if (res.status !== 200) {
      setResponse("Error. Intente nuevamente");
    } else {
      setResponse("¡Mensaje enviado exitosamente!");
    }
  };

  return (
    <div className="Contact" id="Contact">
      <div className="ContactContainer">
        {/* TITLE */}
        <h2 className="ContactContainer__SectionTitle SectionTitle">
          <span className="SectionTitle__Circle"></span>{" "}
          {langEn ? "Get in Touch" : "Contacto"}
        </h2>
        {langEn ? (
          <h3 className="ContactContainer__Title Title-MediumFont Title">
            Together, we <br /> can elevate your project.
          </h3>
        ) : (
          <h3 className="ContactContainer__Title Title-MediumFont Title">
            Juntos podemos potenciar tu proyecto.
          </h3>
        )}
        <h3>{langEn ? "" : ""}</h3>
        <p className="ContactContainer__Subtitle Text-BigFont">
          {langEn
            ? "Write to us to discover how to make it a reality."
            : "Escribinos para descubrir como hacerlo realidad."}
        </p>
        {/* FORM */}
        <form className="ContactContainer__Form" onSubmit={enviarDatos}>
          <input
            maxLength={2000}
            type="text"
            name="Name"
            onChange={handleInputChange}
            value={datos.inp_name}
            required
            className="ContactContainer__Form--Input Text-BigFont"
            placeholder={langEn ? "What is your name?" : "¿Cuál es tu nombre?"}
          ></input>
          <input
            maxLength={2000}
            type="email"
            name="Mail"
            onChange={handleInputChange}
            value={datos.inp_mail}
            required
            className="ContactContainer__Form--Input Text-BigFont"
            placeholder={
              langEn
                ? "What is your email address?"
                : "¿Cuál es tu correo electrónico?"
            }
          ></input>
          <textarea
            type="text"
            name="Message"
            onChange={handleInputChange}
            value={datos.inp_message}
            required
            maxLength={2000}
            className="ContactContainer__Form--Textarea Text-BigFont"
            placeholder={
              langEn
                ? "Tell us about your project."
                : "Contanos sobre tu proyecto"
            }
          ></textarea>
          {/* SUBMIT */}
          <button
            type="submit"
            className="ContactContainer__Form--Submit Button"
          >
            <div className="Submit-Arrow Button-Arrow"></div>{" "}
            <p className="Submit-Text Button-Text">
              {" "}
              {langEn ? "SEND" : "ENVIAR"}
            </p>
          </button>
          <div className="ContactContainer__Form--Response Text Text-MediumFont">
            {response}
          </div>
        </form>
      </div>
    </div>
  );
}
