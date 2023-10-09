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
           preserveAspectRatio: "xMidYMid slice"
        },
     };
    const { theme } = useContext(ThemeContext);
    return (
            <div className="education-body">
                <div className="education-description">
                    <h1>
                    ¡Preparate para esta gran fiesta! <br />
                    Seguime y etiquetame en tus fotos y videos.
                    </h1>
                </div>
                <div className="lottie-ig-id">
                  <Lottie options={defaultOptions} />              
                </div>
                <div className='ig-account'>
                  @anaa_xd2
                </div>
            </div>
    )
}

export default Education
