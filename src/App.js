import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-custom">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
