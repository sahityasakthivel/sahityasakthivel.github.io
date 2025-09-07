import { useState, useEffect } from 'react';
import './NoteBook.css';
import Experiences_Data from '../../assets/experiences_data';

const OpenNotebook = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectedExperience = Experiences_Data.find(e => e.s_no === selectedId);

  return (
    <div className="notebook-container">
      {!isMobile ? (
        <>
          <div className="page">
            <h1>✏️ Experiences</h1>
            {Experiences_Data.map((experience) => (
              <div key={experience.s_no} className="notebook-experience-container">
                <div
                  onClick={() => setSelectedId(experience.s_no)}
                  className="notebook-experience"
                >
                  <p>* {experience.s_time}</p>
                  <p>
                    <span className="text-highlight">{experience.s_name}</span>
                  </p>
                  <h1>{experience.s_highlights}</h1>
                </div>
                <br />
              </div>
            ))}
          </div>

          <div className="spine" />

          <div className="page">
            {selectedId === -1 ? (
              <div className="empty-experience">
                <h1>🔍 Deep Dive</h1>
                <p>Psst... tap one of the job titles on the left to flip the page!</p>
                <div className="doodle">
                  <img
                    src={require('../../assets/smiley.png')}
                    className="doodle-img"
                    alt="doodle"
                  />
                </div>
              </div>
            ) : (
              <div className="experience-bullet-points-overall">
                <h1>{selectedExperience.s_title}</h1>
                <div className="experience-bullet-points">
                  <img src={selectedExperience.s_img} alt="icon" />
                </div>
                {selectedExperience.s_readmore.map((val, i) => (
                  <li key={i}>* {val}</li>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="page">
          {selectedId === -1 ? (
            <>
              <h1>✏️ Experiences</h1>
              <h3>Click one of the job titles to flip the page!</h3>
              {Experiences_Data.map((experience) => (
                <div key={experience.s_no} className="notebook-experience-container">
                  <div
                    onClick={() => setSelectedId(experience.s_no)}
                    className="notebook-experience"
                  >
                    <p>* {experience.s_time}</p>
                    <p>
                      <span className="text-highlight">{experience.s_name}</span>
                    </p>
                    <h1>{experience.s_highlights}</h1>
                  </div>
                  <br />
                </div>
              ))}
            </>
          ) : (
            <>
              <button
                className="back-button"
                onClick={() => setSelectedId(-1)}
              >
                <span class="back-icon">⤺</span>Back
              </button>
              <div className="experience-bullet-points-overall">
                <h1>{selectedExperience.s_title}</h1>
                <div className="experience-bullet-points">
                  <img src={selectedExperience.s_img} alt="icon" />
                </div>
                {selectedExperience.s_readmore.map((val, i) => (
                  <li key={i}>* {val}</li>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OpenNotebook;
