import './styles/App.css';
import Profile_text from './Profile_text';

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
    </div>

    <div className="icon-links">
                <a href="https://www.instagram.com/ian_kampwanyi/" target="_blank">
                    <div class = "ico_circle">
                            <span class = "icon"><i class="ri-instagram-line fa-lg" id = "insta_ico"></i></span>
                    </div>
                </a>
                <a href="https://github.com/Tallerian" target="_blank">
                    <div class = "ico_circle">
                            <span class = "icon"><i class="ri-github-line" id="github_ico"></i></span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ian-kampwanyi-ruvuto-63a531177/" target="_blank">
                    <div class = "ico_circle">
                            <span class = "icon"><i class="ri-linkedin-box-line" id="linked_ico"></i></span>
                    </div>
                </a>
            </div>
    </body>
  );
}

export default App;
