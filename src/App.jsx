import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Rahul from "./components/Rahul/Rahul";
import Skills from "./components/skills/Skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Rahul/>
    </section>
    <section id="Skills">
      <Parallax type="skills" />
    </section>
    <section>
      <Skills/>
    </section>
    <section id="Projects">
      <Parallax type="projects"/>
    </section>
    <Projects/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
