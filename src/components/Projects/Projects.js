import React, { useState } from 'react';
import './Projects.css';
import Experiences_Data from '../../assets/projects_data';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const tapeColors = [
  'tape-blue',
  'tape-pink',
  'tape-mint',
  'tape-yellow',
  'tape-beige',
  'tape-purple'
];

  return (
    <div className='background-portfolio-wall'>
      <h2 className="portfolio-title">My Projects</h2>
      <h3 className="portfolio-title-desc">Click a card to flip and learn more!</h3>

      <div className="portfolio-wall">
      {Experiences_Data.map((experience, index) => {
        const tapeClass = tapeColors[index % tapeColors.length];
        return (
          <div
            key={index}
            className={`project-card ${tapeClass} ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
            style={{ cursor: 'pointer' }}
          >
          <div className="card-inner">
            <div className="card-front">
                
                <p>{experience.s_name}</p>
                
                <img src={experience.s_img}/>
                <h5>{experience.s_desc}</h5>
                <div className='buttons-logo'>
                  {/* {experience.s_lang_icons.map((val, i) => (
                    <img src={val} alt="" key={i} />
                  ))} */}
                </div>
            </div>

            <div className="card-back">
                <p>Details:</p>
                {experience.s_functionality.map(val => (  
                    <li className='functionality'>{val}</li>)) }
                    <div className='buttons-logo'>
                    {experience.s_lang_icons.map((val, i) => (
                    <img src={val} alt="" key={i} />
                  ))}s
                  </div>
            </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Projects;
