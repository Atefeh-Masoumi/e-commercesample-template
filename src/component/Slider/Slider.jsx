import slider1 from '../../asset/watch1.jpg'
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
          <img src={slider1} alt="slider1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="slider3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1}  alt="slider5"/>
        </SwiperSlide>
        
      </Swiper>
      </div>
     );
}
 
export default Slider;