import {ReactTyped} from 'react-typed'
import './IntroBanner.css'
import profile from '../../assets/profile.JPG'

function IntroBanner() {
  return (
    <div>
      <header className="intro-banner-container">
        <div className='intro-banner-left-panel'>
          <div className='intro-banner-left-panel-header-name'>
            Sahitya Sakthivel
          </div>
          <div className='intro-banner-left-panel-header-role'>
            <ReactTyped 
              strings={['Software Engineer @ Bank of America']}
              typeSpeed={100}
              backSpeed={50}
            />
          </div>
        </div>
        <div className='intro-banner-right-panel'>
          <img src={profile} alt="Image"/>
        </div>
      </header>      
    </div>
  );
}

export default IntroBanner;
