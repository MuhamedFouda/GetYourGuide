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

export default function SectionThreeNature() {
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
    <div className='sectionThreeNature'>
        <h3>Awe-inspiring nature around the world</h3>
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
          <img src='https://cdn.getyourguide.com/img/location/54557f9802939c67.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Banff</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5a8c6d62b2f80.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Edinburgh</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/5dc5897063123.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Las Vegas</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/53359507802db.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Nassau</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/6192969fd02eb.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Miami</h5>
          </div>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='swiperSlide'> 
        <div>
          <img src='https://cdn.getyourguide.com/img/location/60e72c3a4c44e.jpeg/86.jpg'/>
          <div className='swiperSlideText'>
            <h5>Raykjavik</h5>
          </div>
        </div>
        </SwiperSlide> 
        <button className="swiper-btn-next" style={{position:'absolute',top:'50%',right:'0rem',zIndex:'2'}}> <IoIosArrowForward style={{ color: '#0071eb', fontSize: '2rem' }} /> </button>

    </Swiper>
        </div>


    </div>
  )
}
