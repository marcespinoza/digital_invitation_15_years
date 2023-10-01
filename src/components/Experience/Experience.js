

import bgdonut1 from './image/bg-donut-1.png'
import bgdonut2 from './image/bg-donut-2.png'

import { Pagination, EffectCoverflow, Autoplay  } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const slider = [
  {
      title: "Donut 1",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: "https://onedrive.live.com/embed?resid=C478CFE9F71064A1%214384&authkey=%21ABaBOn6kvVZ3YCk&width=480&height=640"
    },
    {
      title: "Donut 2",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: "https://onedrive.live.com/embed?resid=C478CFE9F71064A1%214386&authkey=%21AJMxGRUNLT1SFok&width=640&height=480"
    },
    {
      title: "Donut 3",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: "https://onedrive.live.com/embed?resid=C478CFE9F71064A1%214385&authkey=%21AKaRNAgscdlz3_k&width=1600&height=1200"
    },
  
    {
      title: "Donut 4",
      description: "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
      url: "https://onedrive.live.com/embed?resid=C478CFE9F71064A1%214387&authkey=%21AI4jdn0SR6GF09A&width=1200&height=1600"
    },
]

function Experience() {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>
                <span>discover</span>
                <h1>Sweet Donut Heaven</h1>
                <hr />
                <p>Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.</p>
                <a href="#" className='slider-btn'>download a</a>
            </div>
        </div>

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

        <img src={bgdonut1} alt="bg image" className='bgdonut1' />
        <img src={bgdonut2} alt="bg image" className='bgdonut2' />
    </div>
  )
}
export default Experience
