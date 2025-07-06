import  {useState}  from 'react';
import './NoteBook.css';
import Experiences_Data from '../../assets/experiences_data'

const OpenNotebook = () => {
const [selectedId, setSelectedId] = useState(-1);

  const selectedExperience = Experiences_Data.find(e => e.s_no === selectedId);
  return (
    <div className="notebook-container">
        <div className="page" suppressContentEditableWarning={true}> 
            <h1>✏️ EXPERIENCES</h1>
            {Experiences_Data.map((experience, index)=>
                {
                    return <div  className='notebook-experience-container'>
                                <div  key={experience.s_no}
                                    onClick={() => setSelectedId(experience.s_no)}  className='notebook-experience'>
                                    {`■ ${experience.s_time}\n${experience.s_title}\n${experience.s_name}\n${experience.s_highlights}\n`} 
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
                        <p> Psst... tap one of the job titles to flip the page!</p>
                        <div className='doodle'>
                            <img src={require('../../assets/smiley.png')}className="doodle-img" />
                        </div>

                    </div>
                ) : (
                 <div>
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

