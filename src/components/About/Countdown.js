import React from 'react';
import Wish from '../../utils/Wish';


const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h1 className='neonCountDown'>
          FALTAN
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>Días</span>
          </div>
          <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Horas</span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Minutos</span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Segundos</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;