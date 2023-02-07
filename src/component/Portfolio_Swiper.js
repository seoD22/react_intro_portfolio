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
    <div id='portfoli_swiper'>
      <h2>Portfolio</h2>
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          navigation={true}
          pagination={
            { clickable: true }
          }
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          speed={500}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
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
            swiperDBfile.map((item, index) => {
              const swiperclass = item.cls.join(" ");
              const imgsrc = item.tool_img
              const iconsrc = item.sns_icon

              return <SwiperSlide><div className={swiperclass}><img src={item.src} alt="" className='po_main_img' /><div className='po_mobile'><p className='po_mobile_title'>{item.title[0]}</p><div className='d-flex justify-content-center align-items-center'><button onClick={() => { po_btnupdate(!po_btnToggle) }}><p>More</p><div className={po_btnToggle ? "show po_mobile_sns" : "po_mobile_sns"}>
                {
                  iconsrc.map((it, idx) => {
                    return <img src={it} alt="" />
                  })
                }
              </div></button><div className='circle'></div></div></div><div className='po_des_dep1'><span><strong>{item.title[0]}</strong>{item.title[1]}</span><p className='po_tag'>{item.tag}</p><span className='po_des_dep2'><p>{item.title[2]}</p></span><span><p className='po_mak'>{item.mak}</p></span><div className='tools'><p>TOOLS</p><div>
                {
                  imgsrc.map((iitem, iindex) => {
                    return <img src={iitem} alt="" />
                  })
                }
              </div></div><div className='stack_1'><p>STACK</p><Stackbar num={index}></Stackbar></div><div className='po_sns mt-3'>
                    {
                      iconsrc.map((it, idx) => {
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