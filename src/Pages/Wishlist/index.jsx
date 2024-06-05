import { useRecoilState } from 'recoil'
import $Wishlist from '../../Atoms/AddWishlist'
import Footer from '../../Components/Footer'
import Headers from '../../Components/Headers'
import { IoStarSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

import './index.scss'
export default function Washlist() {
  const [VeiwWishlist, setVeiwWishlist] = useRecoilState($Wishlist)
  return (
    <div className='wishlist'>
      <div style={{ backgroundColor: '#1a2b49', width: '100%',height:'5rem',position:'fixed',top:'0',zIndex:'3'}}>
        <Headers/>
      </div>
      <div className='sections'>
      {
                VeiwWishlist.length>0?
                <>
                        {
          VeiwWishlist.map((item) => {
            return (
              <div className='wishlistItem'>
                <div className='leftSide'>
                  <div style={{position:'relative'}}>
                  <MdFavoriteBorder className='favIcon'/>
                    <img src={item.img} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" ,paddingTop:"1rem"}}>
                    <h4 style={{ display: 'inline-block' }}>{item.title}</h4>
                    <p style={{ display: 'inline-block' }}>{item.head}</p>
                    <p style={{ display: 'inline-block' }}>{item.time}</p>
                  </div>
                </div>
                <div className='rightSide'>
                  <p style={{ color: 'black', fontSize: "13px" }}><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp style={{ color: 'gold' }} /><IoStarSharp /> {item.rate}<span style={{ color: 'gray', fontSize: "10px" }}></span></p>
                  <p style={{ color: 'black', fontSize: "13px" }}>(4.406 reviews)</p>
                  <span style={{ color: 'tomato', fontSize: '14px', fontWeight: '700' }}>{item.from}</span>
                </div>
              </div>
            )
          })
        }
                </>:<h1 style={{marginTop:''}}>No Items add to Wishlist yet</h1>
              }

      </div>
      <Footer />
    </div>
  )
}
