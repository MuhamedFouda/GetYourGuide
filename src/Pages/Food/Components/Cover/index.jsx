import './index.scss'
import Headers from '../../../../Components/Headers'
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';


import 'swiper/css';
import { MdArrowForwardIos } from "react-icons/md";
import Navbar from '../../../../Components/Navbar';

export default function CoverFood() {

    const swiper = useSwiper();
    return (
        <div className='coverFood'>
            <div className='filterFood'>
                <Headers/>
                {/* <Header /> */}
                <div className="coverDetails">
                    <h1>Travel memories <br/>you'll never forget</h1>
                    <h4>Get a taste of authentic Roman flavors</h4>
                    <a href='#'>Learn more <MdArrowForwardIos /> </a>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}
