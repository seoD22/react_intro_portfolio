import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import etc_swiperDB from '../json/etc_swiper.json'

function Etc(props) {
  const etc_swiperfile = etc_swiperDB.swiperDB

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
    <div id="etc">
      <h2 className='mt-3 mb-5'>Etc</h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        loopAdditionalSlides={1}
        spaceBetween={10}
        slidesPerView={1.3}
        centeredSlides={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          992: {
            centeredSlides: false,
            slidesPerView: 3.5,
            spaceBetween: 0,
            speed: 700
          }
        }}
      >
        {
          etc_swiperfile.map((it, idx)=>{
            return(
              <div key={'etc_title'+idx}>
                <SwiperSlide>
                  <p>{it.title}</p>
                  <div className='etc_img'>
                    <img src={it.imgsrc} alt="" />
                  </div>
                </SwiperSlide>
              </div>
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default Etc;