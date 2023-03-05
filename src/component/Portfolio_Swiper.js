import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import swiperDB from '../json/Port_swiper.json'
import Stackbar from './Stackbar'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio_Swiper() {
  const swiperDBfile = swiperDB.swiperdb
  const [po_btnToggle, po_btnupdate] = useState(false)

  // 화면 크기 감지 및 렌더링
  const size = useWindowSize();

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div id='portfoli_swiper' className='my-5 col-lg-9 contentBox mx-lg-auto'>
      <div className='inner'>
        <h2 className='mb-5'>Portfolio</h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          loopAdditionalSlides={1}
          navigation={true}
          pagination={
            { clickable: true }
          }
          spaceBetween={0}
          slidesPerView={1}
          // centeredSlides={true}
          speed={500}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 100000000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            991: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            }
          }}
          className="mySwiper py-5"
        >
          {
            swiperDBfile.map((item, index) => {
              const swiperclass = item.cls.join(" ");
              const imgsrc = item.tool_img
              const iconsrc = item.sns_icon

              return <SwiperSlide><div className={swiperclass}><div className='po_mobile d-lg-none'><p className='po_mobile_title'>{item.title[0]}</p><div className='d-flex justify-content-center align-items-center'><button onClick={() => { po_btnupdate(!po_btnToggle) }}><p>More</p><div className={po_btnToggle ? "show po_mobile_sns" : "po_mobile_sns"}>
                {
                  iconsrc.map((it, idx) => {
                    return <img src={it} alt="" className='img-fluid' />
                  })
                }
              </div></button><div className='circle'></div></div></div><div className='po_des_dep1 text-start'><span><strong>{item.title[0]}</strong>{item.title[1]}</span><p className='po_tag'>{item.tag}</p><span className='po_des_dep2 mt-2'><p>{item.title[2]}</p></span><span><p className='po_mak mt-2'>{item.mak}</p></span><div className='tools'></div><div className='stack_1'><p className='mt-2'>STACK</p><Stackbar num={index}></Stackbar></div><div className='po_sns mt-3'>
                    {
                      iconsrc.map((it, idx) => {
                        return <img src={it} alt="" className='img-fluid'/>
                      })
                    }
                  </div></div><div className='po_img'><img src={item.src}></img></div></div></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>

  );
};

export default Portfolio_Swiper;