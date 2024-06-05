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

export default function Navbar() {
    const navigate=useNavigate()
    return (
        <div className='swiperTabs'>
          <button className="swiper-btn-prev"> <IoIosArrowBack style={{ color: 'black', fontSize: '2rem' }} /> </button>
    <Swiper
        className='swiper'
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev"
        }}
    >
        <SwiperSlide className='swiperSlide'> <Link to={"/"} className='link'> <BsStars /> For You </Link></SwiperSlide> 
        <SwiperSlide className='swiperSlide'> <Link to={'/Culture'} className='link'><HiOutlineOfficeBuilding /> Culture </Link></SwiperSlide>
        <SwiperSlide className='swiperSlide'> <Link to={"/food"} className='link'><ImSpoonKnife /> Food</Link></SwiperSlide> 
        <SwiperSlide className='swiperSlide'><Link to={"/nature"} className='link'><FaMountainSun /> Nature</Link></SwiperSlide>
        <SwiperSlide className='swiperSlide'><Link to={"/sports"} className='link'><GiRunningShoe /> Sports</Link></SwiperSlide>
    </Swiper>
            <button className="swiper-btn-next"> <IoIosArrowForward style={{ color: 'black', fontSize: '2rem' }} /> </button>
</div>  
)
}
