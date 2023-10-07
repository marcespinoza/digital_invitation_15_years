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
<div className="bgimg-1">
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
        </div>
</section>

<section class="hero">
  <div className="musica">
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
             ¡TE ESPERO EL VIERNES PARA FESTEJAR ESTE GRAN MOMENTO DE MI VIDA!
             <br />
                CLICKEA EN EL BOTON DE ABAJO Y ENCONTRA LAS INDICACIONES PARA LLEGAR AL LUGAR

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
            <div className='lottie-dress'>
             <Lottie options={dressOptions}  />
             </div>            
            <div className="dressCode-header">
             <p >
               Elegante
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

<section class="content">
  <article class="content__inner">
    <h1 class="content__title">Some Happy Little Text</h1>
    <h3 class="content__author">By Bob Ross</h3>
    <p>A thin paint will stick to a thick paint. The shadows are just like the highlights, but we're going in the opposite direction. When you do it your way you can go anywhere you choose.</p>
    <p>You have to make almighty decisions when you're the creator. When you buy that first tube of paint it gives you an artist license. There we go. The little tiny Tim easels will let you down. Let's just drop a little Evergreen right here.</p>
    <p>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Just pretend you are a whisper floating across a mountain. This is your world, whatever makes you happy you can put in it. Go crazy.</p>
    <p>The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. We'll play with clouds today. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. Don't kill all your dark areas - you need them to show the light. We don't want to set these clouds on fire. Every day I learn.</p>
    <blockquote>When you do it your way you can go anywhere you choose.</blockquote>
    <p>Let's get wild today. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. This is probably the greatest thing to happen in my life - to be able to share this with you.</p>
    <p>I'm a water fanatic. I love water. This is gonna be a happy little seascape. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Let's put a touch more of the magic here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>
    <p>And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Let all these things just sort of happen. Don't fight it, use what happens. Let's put some happy little bushes on the other side now.</p>
    <blockquote>Don't fight it, use what happens.</blockquote>
    <p>If we're going to have animals around we all have to be concerned about them and take care of them. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Anytime you learn something your time and energy are not wasted. This is your world. We want to use a lot pressure while using no pressure at all. Just let go - and fall like a little waterfall.</p>
    <p>Let's build some happy little clouds up here. Everyone is going to see things differently - and that's the way it should be. Let's do that again. A tree needs to be your friend if you're going to paint him. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.</p>
  </article>
</section>
      <BackToTop />
    </div>
  );
}

export default App;
