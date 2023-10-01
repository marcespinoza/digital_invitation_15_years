import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";

import musicAnimation from "../../assets/json/animation_music.json";


function Skills() {

    const { theme } = useContext(ThemeContext);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: musicAnimation,

        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };

    return (
        <div className="skills">
             <Lottie options={defaultOptions} height={200} width={200} />
            <div className="skillsHeader">
                <h2>Música</h2>
            </div>
            <div className="skillsHeader">
             <p >
             ¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
            </p>
            </div>
            <div>
               <button class="neons">Sugerir canción</button>
            </div>
        </div>
    )
}

export default Skills
