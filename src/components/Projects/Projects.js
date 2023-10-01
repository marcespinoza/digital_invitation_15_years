import React,{ useContext } from 'react';


import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";
import './Projects.css'

import musicAnimation from "../../assets/json/animation_music.json";

function Projects() {

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
            <div className="projects">
                <h1>Confirmación de asistencia</h1>
            <div className="projects">
             <p >
                   Cuento con tu presencia.
                   ¡Confirmá tu asistencia!
            </p>
            <div className="projects">
               <button class="neons">Confirmar asistencia</button>
            </div>
            </div>

            </div>
    )
}

export default Projects
