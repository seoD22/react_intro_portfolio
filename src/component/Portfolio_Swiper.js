import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import swiperDB from '../json/Port_swiper.json'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio_Swiper(){
  const swiperDBfile = swiperDB.swiperdb

  return (
    <div id='portfoli_swiper'>
      <h2>Portfolio</h2>
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          navigation={true}
          pagination={
            {clickable: true}
          }
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          speed={500}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 100000000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            992: {
              slidesPerView: 3,
              spaceBetween: 0,
              speed: 700
            }
          }}
          className="mySwiper"
        >
          {
            swiperDBfile.map((item, index)=>{
              const swiperclass = item.cls.join(" ");

              return <SwiperSlide><div className={swiperclass}><img src={item.src} alt="" /><Link to={item.href}><div><h3>{item.title[0]+index}</h3><span><p>{item.title[1]+index}</p></span></div></Link></div></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>

  );
};

export default Portfolio_Swiper;