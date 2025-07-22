import React from "react";
import doca from '../assets/doc_1.png';
import docb from '../assets/doc_2.png';
import docc from '../assets/doc_3.png';
import {Swiper , SwiperSlide } from 'swiper/react';
import {Pagination , Autoplay} from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import './Doctors.css'

export default function Doctors(){
    return(
        <div className="doc_wrapper">
             <h1 className="doc_h">Our Medical Specialist</h1>
            <Swiper 
            modules={[Pagination,Autoplay]}
            pagination={{clickable:true}}
            autoplay={{delay:3000}}
            loop={true}
            spaceBetween={0.5}
            slidesPerView={4}
            className="doc-swiper"
            >
                <div className="swiper_images">
                <SwiperSlide>
            <img alt="doctor_1" src={doca} className="doc_img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="doctor_2" src={docb} className="doc_img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="doctor_3" src={docc} className="doc_img"/>
            </SwiperSlide>  
               <SwiperSlide>
            <img alt="doctor_1" src={doca} className="doc_img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="doctor_2" src={docb} className="doc_img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img alt="doctor_3" src={docc} className="doc_img"/>
            </SwiperSlide>        
           </div>
            </Swiper>
            
        </div>
        
    );
}