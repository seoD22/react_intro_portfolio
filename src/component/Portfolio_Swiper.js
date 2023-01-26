import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade } from "swiper";
import { Link } from 'react-router-dom';
import swiperDB from '../json/Port_swiper.json'
import 'swiper/css';
import "swiper/css/effect-fade";

function Portfolio_Swiper(){
  const swiperDBfile = swiperDB.swiperdb

  return (
    <div id='portfoli_swiper'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {
          swiperDBfile.map((item, index)=>{
            const swiperclass = item.cls.join(" ");

            return <SwiperSlide><div className={swiperclass}><Link to={item.href}><div><h2>{item.title[0]+index}</h2><span><p>{item.title[1]+index}</p></span></div></Link></div></SwiperSlide>
          })
        }
      </Swiper>
    </div>

  );
};

export default Portfolio_Swiper;