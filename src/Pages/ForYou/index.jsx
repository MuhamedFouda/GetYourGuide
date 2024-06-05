import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Cover from './Components/Cover'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import './index.scss'
export default function ForYou() {
  return (
    <div className='foryou'>
      <Cover />
      <div className='contains'>
        <SectionOne />
        <SectionTwo />
      </div>
      <Footer/>
    </div>
  )
}
