import './App.css';
import Home from './pages/Home/home';
import {Route, Routes, HashRouter} from "react-router-dom";
import Experience from './pages/Experience/experience';
import Experiences from './pages/Experiences/experiences';
import Navbar from './components/Navbar/navbar';
import Project from './pages/Project/project'
import Projects from './pages/Projects/projects'
import Footer from './components/Footer/footer';

function App() {
  return (
    <HashRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/experiences/:id" element={< Experiences />}/>
        <Route path="/project/" element={<Project />}/>
        <Route path="/projects/:id" element={<Projects />}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
