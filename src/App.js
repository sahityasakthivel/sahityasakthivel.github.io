import './App.css';
import { useRef } from 'react';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import IntroBanner from './components/IntroBanner/IntroBanner';
import OpenNotebook from './components/NoteBook/NoteBook';
import Footer from './components/Footer/Footer';
function App() {
  const aboutRef = useRef(null);
  const exeperienceRef = useRef(null);
  const projectRef = useRef(null);
  return (
    <div className="App">
      <Navbar scrollToSection={(section) => {
  const sectionMap = {
    project: projectRef,
    about: aboutRef,
    experience: exeperienceRef,
  };

  const targetRef = sectionMap[section];

  if (targetRef?.current) {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}} />

      <div ref={aboutRef}>
        <IntroBanner/>
        <div className='about-me'>
          <AboutMe defaultText="I'm a recent Computer Science graduate from King's College London, now working as a Software Engineer. I'm passionate about exploring the latest advancements in technology and always eager to expand my skill set across different areas of the tech industry. Determined to use my skills to create projects that will bring around positive changes to the community."/>
        </div>
      </div>
      <div ref={exeperienceRef}>
        <div className="experience-layout-container">
        <OpenNotebook/>
        </div>
      </div>
      <div ref={projectRef}>
        <div className="project-layout-container">
        <Projects/>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
