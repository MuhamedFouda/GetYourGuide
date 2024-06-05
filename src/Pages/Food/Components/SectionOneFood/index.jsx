import './index.scss'
import { useState } from 'react';
import axios from 'axios'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import "animate.css";
import { toast } from 'react-toastify'
import $Wishlist from '../../../../Atoms/AddWishlist';
import { useRecoilState } from 'recoil';
import $CardView from '../../../../Atoms/VeiwCard';
import { useNavigate } from 'react-router-dom';

export default function SectionOneFood() {
    const [VeiwWishlist, setVeiwWisglist] = useRecoilState($Wishlist)
    const [CardView, setCardView] = useRecoilState($CardView)
    const navigate = useNavigate();
    const [cards, setcard] = useState([])
    axios.get("http://localhost:3000/FoodSectionOne").then((ele) => {
        setcard(ele.data)
    })
    return (
        <div className='sectionOneFood wow animate__animated animate__zoomInDown'>
            <h3>Unforgettable cultural experiences</h3>
            <div className='cardsLoop'>
                {
                    cards.map((ele) => {
                        return (
                            <div className='sectionTwoCard'>
                                {
                                    [1, 3, 4, 6, 8].map((element) => {
                                        return (
                                            <>
                                                {
                                                    element == ele.id ? <p style={{ position: 'absolute', top: '5px', left: '4px', color: 'white', fontSize: '14px' }}><img src='https://cdn.getyourguide.com/tf/assets/static/home/original_icon.svg' style={{ height: '15px', width: '15px' }} /> Originals by GetYourGuide</p>
                                                        : ""
                                                }
                                            </>
                                        )
                                    })}

                                <MdFavoriteBorder className='favIcon' onClick={() => { setVeiwWisglist([...VeiwWishlist, ele]); toast.success(`${ele.title} add to wishlist Successfully`) }}/>
                                <img src={ele.img} onClick={() => { setCardView([ele]); navigate('/details') }}/>
                                {
                                    [1, 3, 4, 6, 8].map((element) => {
                                        return (
                                            <>
                                                {
                                                    element == ele.id ? <div style={{ width: '100%', height: '1rem', backgroundColor:'#ff5533' }}></div>
                                                        : ""
                                                }
                                            </>
                                        )
                                    })
                                } 
                                <div style={{ width: '100%', height: '1rem', backgroundColor: '##ff5533' }}></div> 
                                <div className='SectionTwoCardContent'onClick={() => { setCardView([ele]); navigate('/details') }}>
                                    <p><span style={{ color: 'gray' }}>{ele.title}</span></p>
                                    <h6 style={{ margin: '0 0 0 0', padding: '0 0 0 0', fontSize: '14px', fontWeight: '700', textAlign: 'left' }}>{ele.head}</h6>
                                    <span style={{ color: 'black', fontSize: '11px', fontWeight: '400' }}>{ele.time}</span>
                                    {
                                        (ele.id < 5) ? <p style={{ color: 'gray', fontSize: '12px', fontWeight: '500' }}> <AiOutlineSafetyCertificate />
                                            <span>Certificated by GetYourGuide</span></p>
                                            : ""
                                    }
                                    {
                                        (ele.id == 6) ? <button className='btn btn-danger'>Likely to sell out</button> : ""
                                    }
                                    <p style={{ color: 'black', fontSize: "13px" }}><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp /> {ele.rate}<span style={{ color: 'gray', fontSize: "10px" }}>(4.406 reviews)</span></p>
                                    <h7 style={{ color: 'tomato', fontSize: '14px', fontWeight: '700' }}>{ele.from}<span style={{ color: 'black', fontWeight: '300', fontSize: '12px' }}> per person</span></h7>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
