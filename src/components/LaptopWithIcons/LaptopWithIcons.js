import './LaptopWithIcons.css';
import GithubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/Description';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import computer from '../../assets/computer.webp'
import cv from "../../assets/CV.pdf"

const LaptopWithIcons = () => {
  
  return (
    <div className="computer-container">
      <img
        src={computer}
        alt="Computer"
        className="computer-image"
      />

      <div className="icon-overlay">
          <a href = "https://github.com/sahityasakthivel?tab=repositories" target= "_blank"><i class="fa-regular fa-file"></i>  <GithubIcon className='overlay-icon' style={{ fontSize: 35 }}/></a>
          <a href = {cv} target= "_blank"><i class="fa-regular fa-file" href="./CV.pdf" ></i> <ResumeIcon className='overlay-icon' style={{ fontSize: 35 }}/></a>
        <a href = "https://www.linkedin.com/in/sahitya-sakthivel-08299a213/" target= "_blank"><i class="fa-regular fa-file"></i>  <LinkedinIcon className='overlay-icon' style={{ fontSize: 35 }}/></a>
      </div>
    </div>
  );
};

export default LaptopWithIcons;
