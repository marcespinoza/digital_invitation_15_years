import React,{ useContext } from 'react';


import { ThemeContext } from '../../contexts/ThemeContext';
import Lottie from "react-lottie";
import './DressCode.css'

import musicAnimation from "../../assets/json/dress.json";

function DressCode() {

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
        <div className="dressCode">
            <div className="dressCode-header">
                <h2>DRESS CODE</h2>
            </div>
            <div className='lottie-dress'>
             <Lottie options={defaultOptions}  />
             </div>            
            <div className="dressCode-header">
             <p >
               Elegante
            </p>
            </div>
        </div>
    )
}

export default DressCode
