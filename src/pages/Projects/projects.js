import React from 'react'
import './projects.css'
import Projects_Data from '../../assets/projects_data'
import go_back from "../../assets/go-back.svg"
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Projects(){

    const params = useParams()
    const project = Projects_Data[params.id]

    return (
        <div className='projects-individual'>
            <div className='projects-title-individual'>
                <NavLink className="projects-navlink" to ={`/project/` }>
                <button className='projects-navlink-button'> <img src={go_back}></img> </button> </NavLink>
                <h1> {project.s_name} </h1>
            </div>
            <div className='projects-container'>
                <img src={project.s_img} alt=''/>
                <div className='projects-format-individual-dsc'>
                    <div className='projects-title-individual'>
                        <h1> OVERVIEW </h1>
                    </div>
                    <p>{project.s_desc}</p>
                    <div className='projects-functionality'>
                        <br></br>
                        <p> <strong > Key Features:</strong></p>
                        {project.s_functionality.map(val => (  
                        <li>{val}</li>)) }
                    </div>
                 </div>
            </div>
            <br></br>
        </div>
      )
}

export default Projects;