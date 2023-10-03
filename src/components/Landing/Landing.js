import React, { useContext } from 'react';

import './Landing.css';
import './neon.css';
import backgroundLanding from '../../assets/png/landing.png'
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);


    return (
        <div className='landing'>
            <div className='landing--container'>
              
                <div
                    className='landing--container-right'
                    style={{ backgroundImage: `url(${backgroundLanding})`}}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h1 class="neon"> {headerData.name}</h1>
                        <h6>{headerData.title}</h6>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
