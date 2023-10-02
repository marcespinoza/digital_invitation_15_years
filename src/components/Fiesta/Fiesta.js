import React,{ useContext } from 'react';

import './Fiesta.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";

import musicAnimation from "../../assets/json/animation_fiesta.json";


function Fiesta() {

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
        <div className="fiesta">
             <Lottie options={defaultOptions} height={200} width={200} />
            <div className="fiestaHeader">
                <h2>Fiesta</h2>
            </div>
            <div className="fiestaHeader">
             <p >
             ¡Te espero el Viernes 3 de noviembre de 22:00 a 05:00 hs para festejar este gran momento de mi vida!
             <br />
                Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡nos vemos!😉
                <br />
                El abuelo puede concurrir 18hs.

            </p>
            </div>
            <div>
            <a href="https://www.google.com/maps/@-26.1593732,-58.1770433,3a,75y,120.29h,79.82t/data=!3m6!1e1!3m4!1s-lS55Yf1tE0YKBbdmLR8TQ!2e0!7i13312!8i6656?entry=ttu" target="_blank">
               <button class="fiestaButton">Como llegar</button>
               </a>
            </div>
        </div>
    )
}

export default Fiesta
