import React, { useContext } from 'react';

import './Landing.css';
import './neon.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);


    return (
        <div className='landing'>
        <div className='landing--container'>
          
                <div
                    className='lcr--content'
                >
                    <h1 class="neon"> Ana Lilen</h1>
                    <h6 class="flicker" > <span class="fast-flicker">M</span>is<span class="flicker"> 1</span>5</h6>

                </div>
            </div>
    </div>
    );
}

export default Landing;
