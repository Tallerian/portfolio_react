import React, {Component, useState} from 'react';
import './styles/Profile_text.css';
import Typewriter from 'typewriter-effect';

function Profile_text(){

    const phrases = ['Hello my name is Ian Ruvuto Kampwanyi', 'I am a developer', 'Welcome to my CV-look alike portfolio']

    return(
        <div className="ml10">
        <span className="text-wrapper">
            <div className="myprofile-text" id = "myprofile-text"></div>
            <div className="myprofile-text">
            <Typewriter 
                    options={
                        {
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            strings: phrases,
                            pauseFor: 1000,

                        }   
                    }
                />
            </div>    
        </span>
        </div>
    )
}
export default Profile_text