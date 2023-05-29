import TitleLine from "../../Assets/Images/sectiontitle-line.svg";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="ContactContainer">
        {/* TITLE */}
        <p className="ContactContainer__SectionTitle SectionTitle">
          Contacto <img src={TitleLine} alt="Icon"></img>
        </p>
        <p className="ContactContainer__Title Title">
          Juntos podemos potenciar tu proyecto.
        </p>
        <p className="ContactContainer__Subtitle">
          Escribinos para descubrir como hacerlo realidad.
        </p>
        {/* FORM */}
        <form className="ContactContainer__Form">
          <input
            className="ContactContainer__Form--Input"
            placeholder="¿Cuál es tu nombre?"
          ></input>
          <input
            className="ContactContainer__Form--Input"
            placeholder="¿Cuál es tu correo electrónico?"
          ></input>
          <textarea
            className="ContactContainer__Form--Textarea"
            placeholder="Contanos sobre tu proyecto :)"
          ></textarea>
          {/* SUBMIT */}
          <button
            type="submit"
            className="ContactContainer__Form--Submit Button"
          >
            <div className="Button-Arrow"></div>{" "}
            <p className="Button-Text">ENVIAR</p>
          </button>
        </form>
      </div>
    </div>
  );
}
