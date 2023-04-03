import './styles/App.css';

import Profile_text from './Profile_text';
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  const profile_txt = document.getElementById('myprofile-text')


  return (

    <body>
    <div class="container">
      {/*=============== myprofile_container =============== */}
            <div className="myprofile_container">
                <div className="myprofile"></div>
                <div className="ml10">
                  <Profile_text p_txt = {profile_txt}/>
                </div>
            </div>

    
    {/*=============== Linkssss =============== */}
    <div className="icon-links">
        <a href="https://www.instagram.com/ian_kampwanyi/" target="_blank">
            <div class = "ico_circle">
                    <span class = "icon"> <FontAwesomeIcon icon = {faInstagram}/> </span>
            </div>
        </a>
        <a href="https://github.com/Tallerian" target="_blank">
            <div class = "ico_circle">
                    <span class = "icon"><FontAwesomeIcon icon = {faGithub}/></span>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/ian-kampwanyi-ruvuto-63a531177/" target="_blank">
            <div class = "ico_circle">
                    <span class = "icon"><FontAwesomeIcon icon = {faLinkedin}/></span>
            </div>
        </a>
    </div>

    {/*=============== cv_container =============== */}
    <div class="cv_container">
                
        <a href="" class="button_cv">
            Download CV
        </a>  

    </div>

    <div className='section_choose'>
      <div className='section_projects'>Projects</div>
      <div className='section_skills'>Skills</div>
    </div>


    {/*=============== projects display =============== */}
    <Projects/>


    </div>
    </body>
  );
}

export default App;
