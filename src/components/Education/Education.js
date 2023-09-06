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
        <div className="education" id="resume" >
           
            <div className="education-body">
                <div className="education-description">
                <h1>@misquinceanalilen</h1>    
                <Lottie options={defaultOptions} height={300} width={300} />
              
                </div>

  </div>
        </div>
    )
}

export default Education
