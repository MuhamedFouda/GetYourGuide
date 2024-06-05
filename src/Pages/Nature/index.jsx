import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import CoverNature from './Components/Cover'
import SectionOneNature from './Components/SectionOneNature'
import SectionTwoNature from './Components/SectionTwoNature'
import SectionThreeNature from './Components/SectionThreeNature'
import './index.scss'
export default function Nature() {
  return (
    <div className='nature'>
      <CoverNature />
      <div className='sections'>
        <SectionOneNature />
        <SectionTwoNature/>
        <SectionThreeNature/>
      </div>
      <Footer/>
    </div>
  )
}
