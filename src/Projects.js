import React, {Component, useState} from 'react';
import './styles/Projects.css';
import Typewriter from 'typewriter-effect';

const hover_me = "Hey hover me to view my project description"
const projec_desc_1 = "This porject is about this and that this and that this and that this and that";

function Projects(){

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleUnhover = () => {
      setHovered(false);
    };

    const [complete, setComplete] = useState(false);

    const handleComplete = () => {
        setComplete(true);
      };

    return(
        <div class="project_container">

                <div className="project_img"></div>

                <div className="project_desc" 
                onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <div className='desc_text'>{!hovered ? hover_me : 
                        <Typewriter
                            options={
                        {
                            autoStart: true,
                            loop: false,
                            delay: 30,
                            strings: projec_desc_1,
                            pauseFor: 1000,

                        }}
                        onComplete={handleComplete}
                        />}
                    </div>
                </div>
                <div></div>

        </div>
    )
}

function Hover_text() {



    return(
        <div className="desc_title"> Click me to view Project description</div>
    )
}

function Projec_desc(){
    return(
        <div className="desc_text" id="desc_text"> I have been hovered </div>
    )
}
export default Projects