import React, { useContext, useEffect , useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { BackToTop } from './components'
import Countdown  from './components/About/Countdown';
import ScrollToTop from './utils/ScrollToTop'
import sound from "./assets/music/taylor.mp3"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import backgroundLanding from './assets/png/landing.png'
import { headerData } from './data/headerData';
import Lottie from "react-lottie";
import reactLogo from "./assets/json/animation_instagram.json";
import dressAnimation from "./assets/json/dress.json";
import { Pagination, EffectCoverflow, Autoplay  } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './components/Experience/Experience.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import uno from './assets/png/1.jpeg';
import dos from './assets/png/2.jpeg';
import tres from './assets/png/3.jpeg';
import cuatro from './assets/png/4.jpeg';
import cinco from './assets/png/5.jpeg';
import seis from './assets/png/6.jpeg';
import siete from './assets/png/7.jpeg';
import ocho from './assets/png/8.jpeg';
import nueve from './assets/png/9.jpeg';
import diez from './assets/png/10.jpeg';

import './App.css'
import './components/Landing/Landing.css'
import './components/Landing/neon.css'

function App() {

  const { theme } = useContext(ThemeContext);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const name = "Ana Lilén";
  const day = 3;
  const month = 11;
  const [state, setState] = useState({
  seconds: 0,
  hours: 0,
  minutes: 0,
  days: 0,
  isItBday: false,});
  if (name === undefined || day === undefined || month === undefined) {
    // This is if not enough params are provided
    name = 'Ana Lilen'; // Name of the Person
    month = 11; // Month of the Birthday
    day = 3; // Day of the Birthday
  }
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  const isItBday =
  currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        const dateAtm = new Date();
        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }
        const currentTime = dateAtm.getTime();
        const birthdayTime = birthdayDay.getTime();
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactLogo,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    },
 };
 const slider = [
  {url: uno
  },
  { url: dos
  },
  { url: tres
  },  
  {url: cuatro
  },
  {url: cinco
  },
  {url: seis
  },
  {url: siete
  },
  {url: ocho
  }, 
  {url: nueve
  },
  {url: diez
  },
]
const dressOptions = {
  loop: true,
  autoplay: true,
  animationData: dressAnimation,

  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice",
  },
};


  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
<section class="hero">
  <div class="hero-inner" id="section-0">
    <figure></figure>
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
                        <h6 class="flicker" > <span class="fast-flicker">M</span>is<span class="flicker"> 1</span>5</h6>

                    </div>
                </div>
            </div>
        </div>
  </div>
</section>

<section class="hero">
    <div className='page'>
      <Countdown countdownData={state} name={name} />      
    </div>
</section>

<section class="hero">
      <div className="education-body">
                    <h1>
                    ¡Preparate para esta gran fiesta! <br />
                    Seguime y etiquetame en tus fotos y videos.
                    </h1>
                <div className="lottie-ig-id">
                  <Lottie options={defaultOptions} />              
                </div>
                <div className='ig-account'>
                  @anaa_xd2
                </div>
        </div>
</section>

<section class="hero">
  <div className="musica">
    <h1>MUSICA</h1>
      <div className="musicaHeader">
      <p >
      ¡Ayudame sugiriendo las canciones que pensás 
      <br />
      que no pueden faltar en la fiesta!
      </p>
      </div>
      <div className='buttonMusic'>
        <button class="music">Sugerir canción</button>
      </div>
   </div>
</section>

<section class="hero">
    <div className="fiesta">
            <div >
                <h2>FIESTA</h2>
            </div>
            <div className="fiestaHeader">
             <p >
             ¡Te espero el viernes 03/11/23, salón upcn, sito en belgrano, para festejar este gran momento de mi vida!
             <br />
                Clickeá en el botón de abajo y encontrá las indicaciones para llegar al lugar

            </p>
            </div>
            <div>
            <a href="https://www.google.com/maps/place/UPCN+-+Formosa/@-26.177815,-58.1698866,17z/data=!3m1!4b1!4m6!3m5!1s0x945ca5e81a246505:0x4433f925df26ef93!8m2!3d-26.177815!4d-58.1673117!16s%2Fg%2F11fz959btb?entry=ttu" target="_blank">
               <button class="fiestaButton">Como llegar</button>
               </a>
            </div>
        </div>
</section>

<section class="hero">
      <div className='carousel'>

          <Swiper         
          className='myswiper'
          modules={[Pagination, EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true
          }}
          color='#fffff'
          loop={true}
          pagination={{clickable: true}}
          slidesPerView={2}
          >
              {
                  slider.map(data => (
                      <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                    
                      </SwiperSlide>
                  ))
              }
          </Swiper>

      </div>
</section>

<section class="hero">
    <div className="dressCode">
            <div className="dressCode-header">
                <h2>DRESS CODE</h2>
            </div>           
            <div className="dressCode-header">
             <p >
               Sport Elegante
            </p>
            </div>
        </div>
</section>

<section class="hero">
    <div className="asistencia">
                <h1>CONFIRMACION DE ASISTENCIA</h1>
            <div className="header">
             <p >
                   Cuento con tu presencia.
                   ¡Confirmá tu asistencia!
            </p>
            <div >
                <a href="https://forms.gle/bVPjxo125CCv8wzu9">
               <button class="asistenciaButton">Confirmar asistencia</button>
               </a>
            </div>
            </div>

     </div>
</section>
    </div>
  );
}

export default App;
