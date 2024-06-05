import Footer from '../../Components/Footer'
import CoverFood from './Components/Cover'
import SectionOneFood from './Components/SectionOneFood'
import SectionTwoFood from './Components/SectionTwoFood'
import SectionThreeFood from './Components/SectionThreeFood'
import './index.scss'
export default function Food() {
  return (
    <div className='food'>
      <CoverFood />
      <div className='sections'>
        <SectionOneFood />
        <SectionTwoFood/>
        <SectionThreeFood/>
      </div>
      <Footer/>
    </div>
  )
}
