import React,{ useContext } from 'react';


import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";
import './Asistencia.css'

import musicAnimation from "../../assets/json/animation_music.json";

function Asistencia() {

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
        <div className="asistencia">
        <h1>CONFIRMACION DE ASISTENCIA</h1>
    <div className="header">
     <p >
           Cuento con tu presencia.
           ¡Confirmá tu asistencia!
    </p>
    <div >
        <a href="https://forms.gle/bVPjxo125CCv8wzu9">
       <button class="asistenciaButton">Confirmar asistencia</button>
       </a>
    </div>
    </div>

</div>
    )
}

export default Asistencia
