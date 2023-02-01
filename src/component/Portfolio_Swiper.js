import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import swiperDB from '../json/Port_swiper.json'
import Stackbar from './Stackbar'
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
              const imgsrc = item.tool_img
              const iconsrc = item.sns_icon

              return <SwiperSlide><div className={swiperclass}><img src={item.src} alt="" className='po_main_img' /><div className='po_des_dep1'><span><strong>{item.title[0]+index}</strong>{item.title[1]+index}</span><p className='po_tag'>{item.tag}</p><span className='po_des_dep2'><p>{item.title[2]+index}</p></span><span><p className='po_mak'>{item.mak}</p></span><div className='tools'><p>TOOLS</p><div>
                {
                  imgsrc.map((iitem, iindex)=>{
                    return <img src={iitem} alt="" />
                  })
                }
              </div></div><div className='stack_1'><p>STACK</p><Stackbar num={index}></Stackbar></div><div className='po_sns mt-3'>
                {
                  iconsrc.map((it, idx)=>{
                    return <img src={it} alt="" />
                  })
                }
                </div></div></div></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>

  );
};

export default Portfolio_Swiper;