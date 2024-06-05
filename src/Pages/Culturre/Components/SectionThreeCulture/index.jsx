import './index.scss'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import { FaMountainSun } from "react-icons/fa6";
import { GiRunningShoe } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import { useEffect, useState } from 'react';

export default function SectionThreeCulture() {
  const [slidePerview, setSlidePerview] = useState(6);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1180) {
        setSlidePerview(6);
      } else if (window.innerWidth > 750) {
        setSlidePerview(2);
      } else {
        setSlidePerview(1);
      }
    };
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className='sectionThreeCulture'>
        <h3>Continue planning</h3>
        <div className='sctionContant'>
    <Swiper
        className='swiper'
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidePerview}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev"
        }}
    >
        <button className="swiper-btn-prev" style={{position:'absolute',top:'50%',left:'0rem',zIndex:'2'}}> <IoIosArrowBack style={{ color: '#0071eb', fontSize: '2rem'}} /> </button>

        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/53341ba826d09.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Washington,DC</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5ffeb4d289b13.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>London</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/561e750d95cba.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Charleston</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Paris</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5ffeb528d3d6f.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>New York City</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/53341bc660f91.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>New Orleans</h5>
          </div>
        </div>
        </SwiperSlide> 
        <button className="swiper-btn-next" style={{position:'absolute',top:'50%',right:'0rem',zIndex:'2'}}> <IoIosArrowForward style={{ color: '#0071eb', fontSize: '2rem' }} /> </button>

    </Swiper>
        </div>


    </div>
  )
}
