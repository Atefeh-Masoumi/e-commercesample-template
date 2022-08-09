import React from 'react';
import slider1 from '../../asset/digital watch special offer.jpg'
import slider2 from '../../asset/watchspecialoffer.jpg'
import slider3 from '../../asset/lenz-specialoffer.jpg';
import slider4 from '../../asset/slider4.png';
import slider5 from '../../asset/slider5.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./slider.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import { Link } from 'react-router-dom';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
const Slider = () => {
    return ( 
        <div className='container'>
        <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={'/products'}>
            <div className="d-flex justify-content-between">
            <p className='bg-white hover-zoom'> Apple Watch</p>
            <p>$340</p>
            </div>    
          <img src={slider1} alt="slider1" className=''/>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to={'/products'}>
          <div className="d-flex justify-content-between">
              <p className='bg-white hover-zoom'> Smart Watch</p>
              <p>$300</p>
          </div>
          <img src={slider2} alt="slider2" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/products'}>
          <div className="d-flex justify-content-between">
              <p className='bg-white hover-zoom'> Camera Lens</p>
              <p>$120</p>
          </div>
          <img src={slider3} alt="slider3"/>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to={'/products'}>
          <div className="d-flex justify-content-between">
              <p className='bg-white hover-zoom'> Nikon Lens</p>
              <p>$100</p>
          </div>
          <img src={slider4} alt="slider4" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to={'/products'}>
          <div className="d-flex justify-content-between">
              <p className='bg-white hover-zoom'>Silver Microphone</p>
              <p>$20</p>
          </div>
          <img src={slider5}  alt="slider5"/>
        </Link>
        </SwiperSlide>
        
      </Swiper>
      </div>
     );
}
 
export default Slider;