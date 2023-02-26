import React, {Component, useState} from 'react';
import './styles/Projects.css';
import Typewriter from 'typewriter-effect';



function Projects(){

    const pr_1 = ['Hello this is my project about']

    const [isShown, setIsShown] = useState(false);

    function setShown() {
        if (isShown == true){
            console.log("clicked")
            setIsShown(false)
        }else{
            console.log("clickkke")
            setIsShown(true)
        }
    }

    return(
        <div class="project_container">

                <div className="project_img"></div>

                <div className="project_desc" 
                onClick={() => setShown()}
                onMouseLeave={() => setIsShown(false)}
                >
                    {isShown ? <Projec_desc/>:<Hover_text/>}
                </div>

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