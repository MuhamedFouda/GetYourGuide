import './index.scss'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function SectionOne() {  
  const navigate=useNavigate();
  function Navigater(){
    navigate('/wishlist')
  }
  return (
    <div className='sectionOne'>
        <h3>Continue planning</h3>
        <div className='sectionOneCard'>
        <MdFavoriteBorder className='favIcon'onClick={Navigater} />
        <img src='https://cdn.getyourguide.com/img/tour/f253e2fd8a81518740edfdea812f34b0eb66d2eb3e197c85773faf54f80b494f.jpg/132.webp'/>
        <div className='SectionOneCardContent'>
        <p><span style={{color:'gray'}}>CITY CARD</span></p>
        <h6 style={{margin:'0 0 0 0',padding:'0 0 0 0' }}>New York:Go City Explorer Pass<br/>-90+Toirs and Attreactions</h6>
        <span style={{color:'black',fontSize:'14px'}}>2 months</span>
        <p style={{color:'gray',fontSize:'12px',fontWeight:'500'}}> <AiOutlineSafetyCertificate /> <span>Certificated by GetYourGuide</span></p>
        <p style={{color:'black',fontSize:"13px"}}><IoStarSharp style={{color:'gold'}}/><IoStarSharp style={{color:'gold'}} /><IoStarSharp style={{color:'gold'}}/><IoStarSharp style={{color:'gold'}}/><IoStarSharp /> 4.0 <span style={{color:'gray',fontSize:"10px"}}>(4.406 reviews)</span></p>
        <h6 style={{textDecoration:"line-through",fontSize:'13px',fontWeight:'700'}}>From EL 4.097.50</h6>
        <h6 style={{color:'tomato',fontSize:'14px',fontWeight:'700'}}>From EL 3.892.75 <span style={{color:'black',fontWeight:'300',fontSize:'12px'}}>per person</span></h6>
        </div>
        </div>
    </div>
  )
}
