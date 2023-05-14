import "./scss/Styles.scss";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
