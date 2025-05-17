import React from 'react'
import './experiences.css'
import Experiences_Data from '../../assets/experiences_data'
import go_back from "../../assets/go-back.svg"
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Experiences(){
    const params = useParams()
    const project = Experiences_Data[params.id]

    return (
        <div className='experiences-individual'>
            <div className='experiences-title-individual'>
            <NavLink className="experiences-navlink" to ={`/experience/` }>
            <button className='experiences-navlink-button'> <img src={go_back}></img> </button> </NavLink>
                <h1> {project.s_name} </h1>
            </div>
            <div className='experiences-container'>
                <div className='experiences-format-individual-dsc'>
                    <p> <strong>Role: </strong> {project.s_title}</p>
                    <div className='experiences-description'>
                        <p> <strong > Responsibilities: </strong></p>
                            {project.s_readmore.map(val => (  
                                <li>{val}</li>
                            )) }   
                    </div>
                    <br></br>
                    <br></br>
                    {project.s_languages ? <div> <p> <strong > Langugages & Skills</strong></p>
                    {project.s_languages.map(val => (  
                                <button> {val} </button>
                            )) }
                    </div> :<p></p>} 
                </div>
            </div>
        </div>
      )

}

export default Experiences;