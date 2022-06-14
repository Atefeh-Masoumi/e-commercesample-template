
import slider1 from '../../asset/golden watch special offer.jpg'
import slider2 from '../../asset/watchspecialoffer.jpg'
import slider3 from '../../asset/lenz-specialoffer.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./slider.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

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
          <a href='/product'>
        
            <p className='bg-white hover-zoom'> Golden Watch</p>
       
          <img src={slider1} alt="slider1" className=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='/product'>
          <img src={slider2} alt="slider2" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='/product'>
          <img src={slider3} alt="slider3"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1}  alt="slider5"/>
        </SwiperSlide>
        
      </Swiper>
      </div>
     );
}
 
export default Slider;