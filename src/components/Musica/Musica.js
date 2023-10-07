import React,{ useContext } from 'react';

import './Musica.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";

import musicAnimation from "../../assets/json/animation_music.json";


function Musica() {

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
        <div className="musica">
            <div className="musicaHeader">
             <p >
             ¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
            </p>
            </div>
            <div className='buttonMusic'>
               <button class="music">Sugerir canción</button>
            </div>
        </div>
    )
}

export default Musica
