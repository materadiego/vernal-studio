import TitleLine from "../../Assets/Images/sectiontitle-line.svg";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="ContactContainer">
        <p className="ContactContainer__SectionTitle SectionTitle">
          Contacto <img src={TitleLine} alt="Icon"></img>
        </p>
        <p className="ContactContainer__Title">
          Juntos podemos potenciar tu proyecto.
        </p>
        <p className="ContactContainer__Subtitle">
          Te escuchamos para entender los desafíos y personalidad de la marca
        </p>
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
          <button type="submit" className="ContactContainer__Form--Submit">
            <div></div> <p>ENVIAR</p>
          </button>
        </form>
      </div>
    </div>
  );
}
