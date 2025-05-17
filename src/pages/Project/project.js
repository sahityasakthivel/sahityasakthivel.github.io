import React from 'react'
import './project.css'
import Projects_Data from '../../assets/projects_data'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

function Project(){

    return (
        <div className='project-outer'>
            <div className='project'>
                <div className='project-title'>
                    <h1> PROJECTS</h1>
                    <p> Here you will find some of the personal projects that I created</p>
                </div>
                <div className='project-container'>
                    {Projects_Data.map((project, index)=>{
                    return <div key={index} className='project-format'>
                    <div className='project-format-img'>
                        <img src={project.s_img} alt=''/>
                    </div>
                    <div className='project-format-dsc'>
                        <h3>{project.s_name}</h3>
                        <p>{project.s_desc}</p>
                        <div className='buttons'>
                            <div className='buttons-logo'>
                                {project.s_lang_icons.map(val => (  
                                <img src={val} alt=''/>)) } 
                            </div>
                            <NavLink className="project-navlink" to ={`/projects/${project.s_no}` }>
                                <button className='project-navlink-button'> View More</button> </NavLink>
                        </div>
                    </div>
                 
                    
                    </div>})}
                </div>
            </div>
        </div>
      )

}

export default Project;