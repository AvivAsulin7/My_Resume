import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
