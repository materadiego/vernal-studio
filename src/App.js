import "./scss/Styles.scss";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Contact />
    </div>
  );
}

export default App;
