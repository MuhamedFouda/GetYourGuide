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

export default function SectionTwoCulture() {
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
    <div className='sectionTwoCulture'>
        <h3>Continue planning</h3>
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
          <img src='https://cdn.getyourguide.com/img/location/5ca318765b5f4.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>1.Statue of Liberty</h5>
            <span>166 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/60096d567dae3.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>2.Vatican Mus</h5>
            <span>417 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/f973d699939cb2ab.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>3.Eiffel Tower</h5>
            <span>489 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/53d0d9964d00c.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>4.Metropoli of Art</h5>
            <span>45 activities</span>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/602258431bbf9.jpeg/68.webp'/>
          <div className='swiperSlideText'>
            <h5>5.United States </h5>
            <span>80 activities</span>
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
