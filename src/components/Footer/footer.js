import React from 'react'
import './footer.css'
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import ResumeIcon from '@mui/icons-material/Description';

import cv from "../../assets/CV.pdf"
const Footer = () => {
  return (
    <footer className='footer'>

      <ul className='nav-menu'>
        <li><a href = {cv} target= "_blank"><i class="fa-regular fa-file" href="./CV.pdf" ></i> <ResumeIcon className='icon'/></a></li>
        <li> <a href = "https://github.com/sahityasakthivel?tab=repositories" target= "_blank"><i class="fa-regular fa-file"></i>  <GithubIcon className='icon'/></a></li>
        <li> <a href = "https://www.linkedin.com/in/sahitya-sakthivel-08299a213/" target= "_blank"><i class="fa-regular fa-file"></i>  <LinkedinIcon className='icon'/></a></li>
      </ul>
    </footer>
  );
}

export default Footer