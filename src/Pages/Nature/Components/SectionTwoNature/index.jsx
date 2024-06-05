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

export default function SectionTwoNature() {
  const [slidePerview, setSlidePerview] = useState(4);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1180) {
        setSlidePerview(4);
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
    <div className='sectionTwoNature'>
        <h3>Top nature sights you can't miss</h3>
        <div className='sctionContant'>
      {/* <button className="swiper-btn-prev"> <IoIosArrowBack style={{ color: '#1a2b49', fontSize: '2rem'}} /> </button> */}
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
          <img src='https://cdn.getyourguide.com/img/location/578782820ac69.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>1.Golden Circle</h5>
            <span>189 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5776753fa7d15.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>2.Colorado </h5>
            <span>70 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/54ef383a97a20.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>3.Paradise Is</h5>
            <span>48 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/57766d7e7315f.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>4.Pico do Arieiro</h5>
            <span>90 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <button className="swiper-btn-next" style={{position:'absolute',top:'50%',right:'0rem',zIndex:'2'}}> <IoIosArrowForward style={{ color: '#0071eb', fontSize: '2rem' }} /> </button>

    </Swiper>
            {/* <button className="swiper-btn-next"> <IoIosArrowForward style={{ color: '#1a2b49', fontSize: '2rem' }} /> </button> */}
        </div>


    </div>
  )
}
