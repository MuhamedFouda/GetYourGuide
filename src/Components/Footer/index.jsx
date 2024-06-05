import { Link } from 'react-router-dom'
import './index.scss'
import { SlSocialFacebook } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='items1'>
            <div className='section1'>
                <label>Language</label>
                <select class="form-select" style={{borderRadius:'0'}}>
                    <option>English (united states)</option>
                    <option>Polski</option>
                    <option>Norsk</option>
                    <option>Eesti</option>
                </select>
                <label style={{marginTop:'1rem'}}>currency</label>
                <select class="form-select" style={{borderRadius:'0'}}>
                    <option>Egyption Pound</option>
                    <option>Dollar</option>
                    <option>Euro</option>
                </select>
            </div>
            <p style={{fontSize:'13px'}}>© 2008 – 2024 GetYourGuide. Made in Zurich & Berlin.</p>
            </div>
            
            <div className='section2'>
                <p style={{fontWeight:'700',margin:'0'}}>Mobile</p>
                <div className='mobileIcons'>
                <img src='https://cdn.getyourguide.com/tf/assets/static/badges/google-play-badge-en-us.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/badges/app-store-badge-en-us.svg'/>
                </div>
            </div>
            <div className='section3'>
                <p style={{fontWeight:'700',margin:'0'}}>Support</p>
                <ul>
                    <li><Link className='link'> Contact</Link></li>
                    <li><Link className='link'> Legal Notice</Link></li>
                    <li><Link className='link'> Privacy Policy</Link></li>
                    <li><Link className='link'> Cookies and Marketing Preferences</Link></li>
                    <li><Link className='link'> General Terms and Conditions</Link></li>
                    <li><Link className='link'> Information according to the Digital Services Act</Link></li>
                    <li><Link className='link'> Sitemap</Link></li>
                    <li><Link className='link'> Do not Sell or Share my Personal Information</Link></li>
                </ul>
            </div>
            <div className='section4'>
            <p style={{fontWeight:'700',margin:'0'}}>Company</p>
                <ul>
                    <li><Link className='link'> About Us</Link></li>
                    <li><Link className='link'> Careers</Link></li>
                    <li><Link className='link'> Blog</Link></li>
                    <li><Link className='link'> Press</Link></li>
                    <li><Link className='link'> Gift Cards</Link></li>
                    <li><Link className='link'> Explorer</Link></li>
                </ul>
            </div>
            <div className='section5'>
                <div className='workWithUSLinks'>
                <p style={{fontWeight:'700',margin:'0'}}>Work With Us</p>
                <ul>
                    <li><Link className='link'> As a Supply Partner</Link></li>
                    <li><Link className='link'> As a Content Creator</Link></li>
                    <li><Link className='link'> As an Affiliate Partner</Link></li>
                </ul>
                </div>
                <div className='paymentsIcons'>
                <p style={{fontWeight:'700',margin:'0'}}> Ways You Can Pay</p>
                <div className='fristRow'>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/paypal_border.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/mastercard.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/visa.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/maestro.svg'/>
                </div>
                <div className="secondRow">
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/amex.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/jcb.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/discover.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/sofort.svg'/>
                </div>
                <div className="thirdRow">
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/klarna.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/googlepay.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/applepay.svg'/>
                <img src='https://cdn.getyourguide.com/tf/assets/static/payment-methods/bancontact.svg'/>
                </div>
                </div>
                <div className='socialIcons'>
                <SlSocialFacebook style={{cursor:'pointer'}}/>
                <FiInstagram style={{cursor:'pointer'}}/>
                <LuTwitter style={{cursor:'pointer'}}/>
                <FaPinterestP style={{cursor:'pointer'}}/>
                <FaLinkedinIn style={{cursor:'pointer'}}/>

                </div>
            </div>
        </div>
    )
}
