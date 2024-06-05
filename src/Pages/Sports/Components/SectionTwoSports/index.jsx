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

export default function SectionTwoSports() {
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
    <div className='sectionTwoSports'>
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
          <img src='https://cdn.getyourguide.com/img/location/561cef028107d.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>1.Wembely Stad</h5>
            <span>6 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/56ebe60e3cca8.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>2.Madison Sq</h5>
            <span>24 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5dce8e8d392b8.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>3.The O2 Arena</h5>
            <span>11 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/54ef37f582303.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>4.Yankee Std</h5>
            <span>29 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/ef6992aaa511a0d0.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>5.FC BAyern Mus </h5>
            <span>4 activities</span>
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
