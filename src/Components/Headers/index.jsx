import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaSearch } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { CiBrightnessUp } from "react-icons/ci";
import { MdContactSupport } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import getQueryString from '../../utils/getQueryString';
import { useRecoilState } from 'recoil';
import $Search from '../../Atoms/search';

export default function Headers() {
    const navigate=useNavigate()
    function Navigater(){
        navigate('/')
    }
    // For Scroller Header
    const [sticky, setsticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setsticky(true) : setsticky(false)
        })
    }, [])

    const [mobileveiw, setmobileveiw] = useState(false)
    const toggleMenu = () => {
        mobileveiw ? setmobileveiw(false) : setmobileveiw(true);
    }

    const searchInput=useRef()
    const [searchData, setsearchData] = useRecoilState($Search);
    function submitForm() {
        //http://localhost:3004/products?q=iphone&category=smartphones&price_gte=200&price_lte=2000
        const value = searchInput.current.value
        setsearchData(value)
      }
    function searchForm() {
        //http://localhost:3004/products?q=iphone&category=smartphones&price_gte=200&price_lte=2000
        const value = searchInput.current.value
        setsearchData(value)
        console.log(searchData)
        
      }


    // className={`header ${sticky ? 'dark-header' : ''}`}
    return (
        <div className={`header ${sticky ? 'dark-header' : ''}`}>
            <div className='leftSection'>
                <img src='https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg' style={{cursor:"pointer"}} onClick={Navigater}/>
                <FaSearch className='searchIcon' />
                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder=" Search GetYourGuide" name='head' value={searchData.head} ref={searchInput} onChange={searchForm}/>
                <button className='btn btn-primary' onClick={submitForm}> Search</button>
            </div>
            <div className={mobileveiw? 'rightSection':'hide-mobile-menu'}>
                <Link className='link'> Become a Supplier</Link>
                <div className="headerIcons" >
                    <MdFavoriteBorder className='icon' style={{ fontSize: '2rem', color: "white", fontWeight: '900' }} />
                    <Link to="/wishlist" className='link'> Wishlist </Link>
                </div>
                <div className='headerIcons'>
                    <CiShoppingCart className='icon' style={{ fontSize: '2rem', color: "white", fontWeight: '900' }} />
                    <Link className='link'> Cart </Link>
                </div>
                <div className='headerIcons dropdown'>
                    <CgProfile className='dropbt icon' style={{ fontSize: '2rem', color: "white" }} />
                    <div class="dropdown-content">
                        <Link className='link'> <IoMdLogIn  style={{ fontSize: '1.5rem' }} /> <span> Login or Sign Up</span> </Link>
                        <hr />
                        <Link className='link'> <span>Currancy</span></Link>
                        <Link className='link'><span>Language</span></Link>
                        <hr />
                        <Link className='link'> <CiBrightnessUp  style={{ fontSize: '1.5rem' }} /> <span> Login or Sign Up</span> </Link>
                        <hr />
                        <Link className='link'> <MdContactSupport  style={{ fontSize: '1.5rem' }} /> <span> Support</span> </Link>
                        <Link className='link'> <FaMobileAlt  style={{ fontSize: '1.5rem' }} /> <span> Download The app</span> </Link>
                    </div>
                    <Link className='link'> Profile </Link>
                </div>
            </div>
            {/* <img src={require('../../Assets/menu-icon.png')} className='menu-icon' onClick={toggleMenu}/> */}
            <IoMdMenu className='menu-icon' onClick={toggleMenu}/>

        </div>
    )
}