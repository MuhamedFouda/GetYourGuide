import './index.scss'
import Headers from '../../Components/Headers'
import { useRecoilState } from 'recoil'
import Footer from '../../Components/Footer'
import $CardView from '../../Atoms/VeiwCard'
import { IoStarSharp } from "react-icons/io5";

export default function Details() {
    const[veiw]=useRecoilState($CardView)
    console.log(veiw)
  return (
    <div className='datailsPage'>
      <div className='detailsHeader' style={{ backgroundColor: '#1a2b49', width: '100%',height:'5rem',position:'fixed',top:'0' }}>
        <Headers />
      </div>
      <div className='detailsSection'>
        {
        veiw.map((ele,index)=>{
            return(
                <div className='detailsSector'>
                <div className='cardData' key={'$ele'+index}>
                    <h6>{ele.title}</h6>
                    <h4>{ele.head}</h4>
                    <p style={{ color: 'black', fontSize: "18px"}}><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp /> {ele.rate}<span style={{ color: 'gray', fontSize: "10px" }}>(4.406 reviews)</span></p>
                    <img src={ele.img}/>
                    <p style={{textAlign:'left'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit enim perspiciatis quisquam possimus debitis modi assumenda corrupti id dolor. Voluptatum quia error laboriosam dignissimos suscipit, ipsa optio perferendis sit? Rerum?</p>
                </div>
                <div className='rightSection'>
                <div className='cardSalary'>
                    <button className='btn btn-danger'> Likely to sell out </button>
                    <h6>{ele.from}</h6>
                    <button className='btn btn-primary'> Check availability </button>
                    <p> <a href='#'>Reserve now & pay later</a> to book your spot and pay nothing today</p>
                </div>
                <div className='cardDate'>
                    <button className='btn btn-danger'> Likely to sell out </button>
                    <div style={{display:'flex',flexDirection:'row',gap:'2px',padding:'0 2px'}}>
                    <p>Sat</p>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p style={{backgroundColor:'#1a2b49'}}>Thu</p>
                    <p style={{backgroundColor:'#1a2b49'}}>Fri</p>
                    </div>
                </div>
                </div>
                </div>
            )
        })
        }
      </div>
      <Footer/>
    </div>
  )
}

