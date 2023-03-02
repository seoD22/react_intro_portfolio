import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper";


import main_swiperDB from '../json/main_swiperDB.json'
import 'swiper/css';

function Mainbanner() {
  const main_swiperDBfile = main_swiperDB.point;

  const bgimg = ['/img/common/me0.jpg','/img/common/me1.jpg','/img/common/me2.jpg'];

  const  countDownInterval = useRef(0);

  useEffect(() => {
    document.querySelector('.ani'+countDownInterval.current).classList.add('show')
      setInterval(() => {
        countDownInterval.current =  countDownInterval.current + 1;
        countDownInterval.current %= 3; 
        document.querySelectorAll('.banner_img').forEach( (i, idx) =>{
              if(countDownInterval.current === idx){
                   i.classList.add('show')
              }else{
                   i.classList.remove('show')
              }
       })
      }, 3000);
   
  }, []);




  return (
    <div id='main_banner' className='position-relative d-flex flex-column justify-content-center'>
     
        <div className='banner position-absolute left-0 w-100 h-100 top-0'>
          {
            bgimg.map((item, index) => {


           
              return (
             
                <div className={'banner_img position-absolute  left-0 w-100 h-100 top-0 ani'+index } key={'banner'+index} style={{"background-image":"url("+item+")"}} ></div>

              
              )
            })
          }
        </div>
        <div className='main_text  text-center contentBox mx-auto'>
          <div className="col-lg-12">
          <span className=''>
            프론트엔드 개발자
          </span>
          <div className='text_bin my-3 d-flex align-items-center justify-content-center'>
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
        {/* <img className='painting' src="./img/small/twinkle.png" alt="" /> */}
    
    </div>
  );
}

export default Mainbanner;