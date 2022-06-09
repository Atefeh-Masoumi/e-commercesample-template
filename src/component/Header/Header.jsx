import './header.scss';
import slider1 from '../../asset/headphones-laptop-table.jpg';
import slider2 from '../../asset/top-view-white-headphones-background.jpg';
import slider3 from '../../asset/pc-banner.jpg';
import slider4 from '../../asset/camera banner.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./header.scss";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade
} from "swiper/core";

SwiperCore.use([ Pagination, Navigation,Autoplay,EffectFade]);

const Header = () => {
    return ( 
        <div className="slider ">
            <Swiper 
            spaceBetween={50}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              lazy={true}
              loop={true}
            
            >
                <SwiperSlide> <img src={slider1} alt="slider1"/></SwiperSlide>
                <SwiperSlide> <img src={slider2} alt="slider2"/></SwiperSlide>
                <SwiperSlide> <img src={slider3} alt="slider3"/></SwiperSlide>
                <SwiperSlide> <img src={slider4} alt="slider4"/></SwiperSlide>

            </Swiper>
        </div>
     );
}
 
export default Header;