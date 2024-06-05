import './index.scss'
import axios from 'axios'
import Header from '../../../../Components/Header'
import Headers from '../../../../Components/Headers'
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
import { useSwiper } from 'swiper/react';


import 'swiper/css';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../../../Components/Navbar';

export default function Cover() {

    const swiper = useSwiper();
    return (
        <div className='cover'>
            <div className='filter'>
                <Headers/>
                {/* <Header /> */}
                <div className="coverDetails">
                    <h1>Travel memories <br/>you'll never forget</h1>
                    <p><img src='https://cdn.getyourguide.com/tf/assets/static/home/original_icon.svg' /> Originals by GetYourGuide</p>
                    <h4>See the Vatican Museums like never before</h4>
                    <a href='#'>Learn more <MdArrowForwardIos /> </a>
                </div>
                <Navbar/>
                {/* <div className='swiperTabs'>
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
                        <Link> <SwiperSlide className='swiperSlide'> <BsStars /> For You</SwiperSlide> </Link>
                        <Link> <SwiperSlide className='swiperSlide'><HiOutlineOfficeBuilding /> Culture</SwiperSlide> </Link>
                        <Link> <SwiperSlide className='swiperSlide'><ImSpoonKnife /> Food</SwiperSlide> </Link>
                        <Link> <SwiperSlide className='swiperSlide'><FaMountainSun /> Nature</SwiperSlide></Link>
                        <Link> <SwiperSlide className='swiperSlide'><GiRunningShoe /> Sports</SwiperSlide></Link>
                    </Swiper>
                    <button className="swiper-btn-next"> <IoIosArrowForward style={{ color: 'black', fontSize: '2rem' }} /> </button>
                    <button className="swiper-btn-prev"> <IoIosArrowBack style={{ color: 'black', fontSize: '2rem' }} /> </button>
                </div> */}
            </div>
        </div>
    )
}
