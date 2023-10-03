


import { Pagination, EffectCoverflow, Autoplay  } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Experience.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import uno from '../../assets/png/1.jpeg';
import dos from '../../assets/png/2.jpeg';
import tres from '../../assets/png/3.jpeg';
import cuatro from '../../assets/png/4.jpeg';
import cinco from '../../assets/png/5.jpeg';
import seis from '../../assets/png/6.jpeg';
import siete from '../../assets/png/7.jpeg';
import ocho from '../../assets/png/8.jpeg';
import nueve from '../../assets/png/9.jpeg';
import diez from '../../assets/png/10.jpeg';


const slider = [
    {url: uno
    },
    { url: dos
    },
    { url: tres
    },
  
    {url: cuatro
    },
    {
      title: "Donut 5",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: cinco
    },
    {
      title: "Donut 6",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: seis
    },
    {
      title: "Donut 7",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: siete
    },
    {
      title: "Donut 8",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: ocho
    }, {
      title: "Donut 9",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: nueve
    },
    {
      title: "Donut 10",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: diez
    },
]

function Experience() {
  return (
    <div className='carousel'>

        <Swiper 
        
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
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
  )
}
export default Experience
