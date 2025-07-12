import  {useState}  from 'react';
import './NoteBook.css';
import Experiences_Data from '../../assets/experiences_data'

const OpenNotebook = () => {
const [selectedId, setSelectedId] = useState(-1);

  const selectedExperience = Experiences_Data.find(e => e.s_no === selectedId);
  return (
    <div className="notebook-container">
        <div className="page" suppressContentEditableWarning={true}> 
            <h1>✏️ Experiences</h1>

            {Experiences_Data.map((experience, index)=>
                {
                    return <div  className='notebook-experience-container'>
                                <div  key={experience.s_no}
                                    onClick={() => setSelectedId(experience.s_no)}  className='notebook-experience'>
                                    <p>■ {experience.s_time}</p>
                                <p> <span class="text-highlight">{experience.s_name} </span></p>
                                <h1>{experience.s_highlights}</h1> 
                                </div>
                                <br></br>
                            </div> 
                }
            )}
        </div>
        <div className="spine" />
            <div className="page" suppressContentEditableWarning={true}> 
                {selectedId === -1 ? (
                    <div className='empty-experience'>
                        <h1>🔍 Deep Dive</h1>
                        <p> Psst... tap one of the job titles on the left to flip the page!</p>
                        <div className='doodle'>
                            <img src={require('../../assets/smiley.png')}className="doodle-img" />
                        </div>

                    </div>
                ) : (
                 <div className='experience-bullet-points-overall'>
                    <h1>{selectedExperience.s_title}</h1>
                        <div className='experience-bullet-points'>
                            <img src={selectedExperience.s_img} alt="icon"></img>
                        </div>
                        {selectedExperience.s_readmore.map(val => ( <li>{val}</li>))
                        }                  
                </div>
                )
                }
            </div>
    </div>
  );
};

export default OpenNotebook;

