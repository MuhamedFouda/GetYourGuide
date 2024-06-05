import './index.scss'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import "animate.css";
import { useRecoilState } from 'recoil';
import $Wishlist from '../../../../Atoms/AddWishlist';
import { useNavigate } from 'react-router-dom';
import $CardView from '../../../../Atoms/VeiwCard';
import $Search from '../../../../Atoms/search';
import { toast } from 'react-toastify'


export default function SectionTwo() {
    const [VeiwWishlist, setVeiwWisglist] = useRecoilState($Wishlist)
    const [CardView, setCardView] = useRecoilState($CardView)
    const [cards, setcard] = useState([])
    const [searchData] = useRecoilState($Search)
    const navigate = useNavigate();
    useEffect(() => {
        axios(`http://localhost:3000/ForyouSectionTwo?title=` + searchData.toUpperCase()).then((ele) =>
            setcard(ele.data)
        );
    }, [searchData]);


    // axios.get("http://localhost:3000/ForyouSectionTwo").then((ele) => {
    //     setcard(ele.data)
    // })
    // console.log(CardView)

    return (
        <div className='sectionTwo wow animate__animated animate__zoomInDown'>
            <h3>Based on your search in New York City</h3>
            <div className='cardsLoop'>
                {
                    cards.map((ele) => {

                        return (
                            <div className='sectionTwoCard'>

                                <MdFavoriteBorder className='favIcon' onClick={() => { setVeiwWisglist([...VeiwWishlist, ele]);toast.success(`${ele.title} add to wishlist Successfully`) }} />
                                <img src={ele.img} onClick={() => { setCardView([ele]); navigate('/details') }} />
                                <div className='SectionTwoCardContent' onClick={() => { setCardView([ele]); navigate('/details') }}>
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
        </div>
    )
}
