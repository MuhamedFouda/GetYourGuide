import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import CoverCaluture from './Components/Cover'
import SectionOneCulture from './Components/SectionOneCulture'
import SectionThreeCulture from './Components/SectionThreeCulture'
import SectionTwoCulture from './Components/SectionTwoCulture'
import './index.scss'
export default function Culturre() {
  return (
    <div className='culturre'>
      <CoverCaluture />
      <div className='sections'>
        <SectionOneCulture />
        <SectionTwoCulture/>
        <SectionThreeCulture/>
      </div>
      <Footer/>
    </div>
  )
}
