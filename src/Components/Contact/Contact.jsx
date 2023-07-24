export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="ContactContainer">
        {/* TITLE */}
        <h2 className="ContactContainer__SectionTitle SectionTitle">
          <span className="SectionTitle__Circle"></span> Contacto
        </h2>
        <h3 className="ContactContainer__Title Title-MediumFont Title">
          Juntos podemos potenciar tu proyecto.
        </h3>
        <p className="ContactContainer__Subtitle Text-BigFont">
          Escribinos para descubrir como hacerlo realidad.
        </p>
        {/* FORM */}
        <form className="ContactContainer__Form">
          <input
            className="ContactContainer__Form--Input Text-BigFont"
            placeholder="¿Cuál es tu nombre?"
          ></input>
          <input
            className="ContactContainer__Form--Input Text-BigFont"
            placeholder="¿Cuál es tu correo electrónico?"
          ></input>
          <textarea
            className="ContactContainer__Form--Textarea Text-BigFont"
            placeholder="Contanos sobre tu proyecto :)"
          ></textarea>
          {/* SUBMIT */}
          <button
            type="submit"
            className="ContactContainer__Form--Submit Button"
          >
            <div className="Submit-Arrow Button-Arrow"></div>{" "}
            <p className="Submit-Text Button-Text">ENVIAR</p>
          </button>
        </form>
      </div>
    </div>
  );
}
