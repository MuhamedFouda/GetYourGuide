import { RecoilRoot } from 'recoil';
import './App.scss';
import ForYou from './Pages/ForYou';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import WOW from "wowjs";
import Culturre from './Pages/Culturre';
import Food from './Pages/Food';
import Nature from './Pages/Nature';
import Sports from './Pages/Sports';
import Washlist from './Pages/Wishlist';
import Details from './Pages/Details';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ForYou/>}/>
            <Route path='/Culture' element={<Culturre/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/nature' element={<Nature/>}/>
            <Route path='/sports' element={<Sports/>}/>
            <Route path='/wishlist' element={<Washlist />}/>
            <Route path='/details' element={<Details />}/>
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <ToastContainer />
    </div>
  );
}

export default App;
