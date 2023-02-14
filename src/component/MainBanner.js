import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import main_swiperDB from '../json/main_swiperDB.json'
import 'swiper/css';

function Mainbanner() {
  const main_swiperDBfile = main_swiperDB.point

  return (
    <div id='main_banner' className='container'>
      <div>
        <div className='main_text'>
          <span>
            프론트엔드 개발자
          </span>
          <div className='text_bin d-flex align-items-center'>
            <Swiper 
              modules={[Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              // onSwiper={(swiper) => console.log(swiper)}
              direction={"vertical"}
            >
              {
                main_swiperDBfile.map((item, index) => {
                  return <SwiperSlide key={'slide'+index} className={item.cls}>{item.title}</SwiperSlide>
                })
              }
            </Swiper>
          </div>
          <span>
            윤서희입니다.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mainbanner;