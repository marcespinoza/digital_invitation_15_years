import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";
import reactLogo from "../../assets/json/animation_instagram.json";


import './Education.css'



function Education() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: reactLogo,

        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };
    const { theme } = useContext(ThemeContext);
    return (
        <div className="bgimg-1">
        <div id="resume" >           
            <div className="education-body">
                <div className="education-description">
                <h1>@anaa_xd2 #15analilen</h1>    
                <div className="education-description">
                    ¡Preparate para esta gran fiesta!
                    Seguime y etiquetame en tus fotos y videos.
                </div>
                  <Lottie options={defaultOptions} height={300} width={300} />              
                </div>
                
            </div>
        </div>
        </div>  
    )
}

export default Education
