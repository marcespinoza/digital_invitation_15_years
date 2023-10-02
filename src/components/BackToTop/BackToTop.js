import React, { useState, useContext, useEffect } from 'react';
import { IoMdPlayCircle, IoMdPause } from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';
import sound from "../../assets/music/taylor.mp3"

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [play, setPlaying] = useState(false);

    const { theme } = useContext(ThemeContext);

    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);
      
        const toggle = () => setPlaying(!playing);
      
        useEffect(() => {
            playing ? audio.play() : audio.pause();
          },
          [playing]
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
          };
        }, []);
      
        return [playing, toggle];
      };

      const [playing, toggle] = useAudio(sound);

 


    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '3rem',
            color: theme.tertiary,
        },
    }));

    const classes = useStyles();

    return (
        <div
            style={{ display: 'inline' }}
            className='backToTop'
        >
            <button onClick={toggle} aria-label='Back to top'>
                { playing? <IoMdPause className={classes.icon} />:
                <IoMdPlayCircle className={classes.icon} />
                }
            </button>
        </div>
    );
}

export default BackToTop;
