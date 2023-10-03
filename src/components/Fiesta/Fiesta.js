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
            <div >
                <h2>FIESTA</h2>
            </div>
            <div>
            <Lottie options={defaultOptions} height={180} width={200}/></div>
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
            <a href="https://www.google.com/maps/place/UPCN+-+Formosa/@-26.177815,-58.1698866,17z/data=!3m1!4b1!4m6!3m5!1s0x945ca5e81a246505:0x4433f925df26ef93!8m2!3d-26.177815!4d-58.1673117!16s%2Fg%2F11fz959btb?entry=ttu" target="_blank">
               <button class="fiestaButton">Como llegar</button>
               </a>
            </div>
        </div>
    )
}

export default Fiesta
