import React from "react";
import slida from '../assets/slid_a.png';
import slidb from '../assets/slid_b.png';
import slidc from '../assets/slid_c.png'
import {Swiper , SwiperSlide } from 'swiper/react';
import {Pagination , Autoplay} from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

export default function PromoBanner(){
    return(
        <div className="promo_wrapper">
            <Swiper 
            modules={[Pagination,Autoplay]}
            pagination={{clickable:true}}
            autoplay={{delay:5000}}
            loop={true}
            spaceBetween={2}
            slidesPerView={3}
            className="promo-swiper"
            >
                <div className="swiper_images">
                <SwiperSlide>
            <img alt="promo_1" src={slida} className="promo_image"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="promo_2" src={slidb} className="promo_image"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="promo_3" src={slidc} className="promo_image"/>
            </SwiperSlide>
             <SwiperSlide>
            <img alt="promo_1" src={slida} className="promo_image"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="promo_2" src={slidb} className="promo_image"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="promo_3" src={slidc} className="promo_image"/>
            </SwiperSlide>
            
          
               </div>
            </Swiper>
            
        </div>
        
    );
}