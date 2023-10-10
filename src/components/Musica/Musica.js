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
        <h1>MUSICA</h1>
          <div className="musicaHeader">
          <p >
          ¡Ayudame sugiriendo las canciones que pensás 
          <br />
          que no pueden faltar en la fiesta!
          </p>
          </div>
          <div className='buttonMusic'>
          <a href="https://forms.gle/Tyy8RiedvE4sfqcXA" target="_blank">
            <button class="music">Sugerir canción</button>
          </a>
          </div>
       </div>
    )
}

export default Musica
