import './App.css';
import {BrowserRouter,NavLink,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import Img from './img/logo.png'

function App() {
  useEffect(()=>{
    document.title ="Portfolio"
  })
  return (
    <BrowserRouter>
    <>
    <div className="contenaire">
      <nav>
        <img src={Img} alt='img'/>
       <ul className='ulApp'>
        <li><NavLink className='nav_op' to="/" >// home</NavLink></li>
          <li><NavLink className='nav_op' to="About">// about</NavLink></li>
          <li><NavLink className='nav_op' to="resume">// resume</NavLink></li>
          <li><NavLink className='nav_op' to="portfolio">// portfolio</NavLink></li>
          <li><NavLink className='nav_op' to="contact">// contact</NavLink></li>
        </ul>
        </nav>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Resume' element={<Resume/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
