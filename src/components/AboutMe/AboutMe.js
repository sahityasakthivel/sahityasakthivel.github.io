import './AboutMe.css';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import ResumeIcon from '@mui/icons-material/Description';
import cv from "../../assets/CV.pdf"
import PostIt from '../PostIt/PostIt';
import Notepad from '../Notepad/Notepad'

const AboutMe = () => {
  return (
    <div className="layout-container">
        <div className='corkboard-outline'>
            <h3>My Digital Bulletin </h3>
            <div className="corkboard">
                <div className='notepad-panel'>
                    <Notepad defaultText="I'm a recent Computer Science graduate from King's College London, now working as a Software Engineer. I'm passionate about technology and eager to grow my skills to build projects that positively impact the community.
                    During my degree, I developed strong programming skills in Java, Scala, Python, C++, HTML, and CSS through individual and team projects. You can find details about these in my Projects section.
                    Since starting my career, I've applied and expanded these skills in real-world projects, shaping my approach to software development. Learn more in my Experiences section.
                    Feel free to explore my portfolio, and connect with me via LinkedIn—I’d love to hear from you!" />
                </div> 

                <PostIt title="LinkedIn" color="#DCF0FF" rotate="3deg">
                    <p>Connect with me!</p>
                    <a href = "https://www.linkedin.com/in/sahitya-sakthivel-08299a213/" target= "_blank"><i class="fa-regular fa-file"></i>  <LinkedinIcon className='icon' style={{ fontSize: 50 }}/></a>
                </PostIt>

                <PostIt title="CV" color="#FFD1DC" rotate="-2deg" top="72px">
                    <p> Learn more about me!</p>
                    <a href = {cv} target= "_blank"><i class="fa-regular fa-file" href="./CV.pdf" ></i> <ResumeIcon className='icon' style={{ fontSize: 50 }}/></a>
                </PostIt>
            
                <PostIt title="GitHub " color="#E0FFF0" rotate="-1deg">
                                <p> View my Projects!</p>

                    <a href = "https://github.com/sahityasakthivel?tab=repositories" target= "_blank"><i class="fa-regular fa-file"></i>  <GithubIcon className='icon' style={{ fontSize: 50 }}/></a>
                </PostIt>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;
