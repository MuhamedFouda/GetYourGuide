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
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
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

    // className={`header ${sticky ? 'dark-header' : ''}`}
    return (
        <div className="header">
            <div className="leftSection">
                <img src='https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg' />
                <FaSearch className='searchIcon' />
                <input className="form-control border-end-0 border rounded-pill" type="text" placeholder=" Search GetYourGuide" />
                <button className='btn btn-primary'> Search</button>
            </div>
            <div className="rightSection">
                <Link className='link'> Become a Supplier</Link>
                <div className="headerIcons" >
                    <MdFavoriteBorder className='icon' style={{ fontSize: '2rem', color: "white", fontWeight: '900' }} />
                    <Link className='link'> Wishlist </Link>
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

        </div>
    )
}