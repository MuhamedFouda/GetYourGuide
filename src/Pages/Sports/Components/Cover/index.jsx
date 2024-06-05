import './index.scss'
import Headers from '../../../../Components/Headers'
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';


import 'swiper/css';
import { MdArrowForwardIos } from "react-icons/md";
import Navbar from '../../../../Components/Navbar';

export default function CoverSports() {

    const swiper = useSwiper();
    return (
        <div className='coverSports'>
            <div className='filterSports'>
                <Headers/>
                {/* <Header /> */}
                <div className="coverDetails">
                    <h1>Travel memories <br/>you'll never forget</h1>
                    <h4>Delve into the crystal-blue coast of Tossa de Mar</h4>
                    <a href='#'>Learn more <MdArrowForwardIos /> </a>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}
