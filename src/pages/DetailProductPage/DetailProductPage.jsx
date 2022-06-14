import React, {  useState } from "react";
import './detailproduct.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { MDBInput } from 'mdb-react-ui-kit';

import "swiper/components/navigation/navigation.min.css";
import'swiper/components/thumbs/thumbs.min.css';
import SwiperCore, {
  
     Navigation, Thumbs
} from "swiper/core";

SwiperCore.use([ Navigation, Thumbs]);

const DetailProductPage  = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return ( 
        <div className="d-flex justify-content-center mt-100">
            {/* left section product slider */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" >
            <Swiper
                style={{
                "--swiper-navigation-color": "#000",
                
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[ Navigation, Thumbs]}
                className="mySwiper2 "
            >
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="slider product" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1550935268-e9e4bdc7c972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt="slider product"  />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="slider product" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1548960254-456846b00986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"alt="slider product"  />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1543493251-bc3e68468d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"alt="slider product"  />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[ Navigation, Thumbs]}
                className="Swiperdetailpage"
            >
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="slider productdetail"  />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1550935268-e9e4bdc7c972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt="slider productdetail" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="slider productdetail"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1548960254-456846b00986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"alt="slider productdetail" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1543493251-bc3e68468d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"alt="slider productdetail"/>
                </SwiperSlide>   
                
            </Swiper>
            </div>

            {/* right section product info */}
        <div class = "product-content col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <h2 class = "product-title-page">Modern Watch</h2>
          <a href = "/product" class = "product-link hover-zoom">visit store</a>
          

          <div class = "product-price">
            <p class = "last-price">Old Price: <span>$257.00</span></p>
            <p class = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div class = "product-detail">
            <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Watch</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div class = "purchase-info">
          <MDBInput  id='typeNumber' type='number'  defaultValue='1' className="w-50"/>
            <button type = "button" class = "btn">
              Add to Cart <i class = "fas fa-shopping-cart"></i>
            </button>
            
          </div>

          
        </div>
        </div>
     );
}
 
export default DetailProductPage ;