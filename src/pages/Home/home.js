import React from 'react'
import './home.css'
import profile from "../../assets/profile.JPG"
import { NavLink } from 'react-router-dom'

function Home(){
    return(
        <div className='home-container'>
            
            <h1 className='title'>
                SAHITYA SAKTHIVEL
            </h1>
            <div className='home'>
                <img src={profile}></img>
                <p> I'm a recent Computer Science graduate from King's College London, now working as a Software Engineer. I'm passionate about exploring the latest advancements in technology and always eager to expand my skill set across different areas of the tech industry.Determined to use my skills to create projects that will bring around positive changes to the community.</p>   <br></br>
                <p> During my degree, I built a solid foundation in programming through languages like Java, Scala, Python, C++, HTML, and CSS. I gained hands-on experience through both individual and team-based projects, which helped me strengthen my problem-solving abilities and collaboration skills. You can learn more about these in the <NavLink to ="/project" className="nav-link"> Projects</NavLink> section.</p>  
                <br></br>
                <p>Since entering the industry, I’ve been able to apply and grow these skills in real-world settings—working on both internal tools and broader applications. These experiences have shaped how I approach software development and continue to guide my growth as an engineer. You can read more about my professional journey in the <NavLink to ="/experience" className="nav-link"> Experiences </NavLink>  section.</p>
                <br></br>
                <p> Feel free to explore my portfolio to learn more about me. If you’d like to connect or have any questions, you can find a link to my LinkedIn in the right-hand navigation bar — I’d love to hear from you! </p>
                <br></br>
            </div>
        </div>
    )

}

export default Home;
