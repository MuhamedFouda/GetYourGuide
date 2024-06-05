import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import CoverSports from './Components/Cover'
import SectionOneCulture from './Components/SectionOneSports'
import SectionThreeCulture from './Components/SectionThreeSports'
import SectionTwoCulture from './Components/SectionTwoSports'
import './index.scss'
export default function Sports() {
  return (
    <div className='sports'>
      <CoverSports />
      <div className='sections'>
        <SectionOneCulture />
        <SectionTwoCulture/>
        <SectionThreeCulture/>
      </div>
      <Footer/>
    </div>
  )
}
