import React from 'react'
import './Home.css'
import { NavLink} from 'react-router-dom'
import { Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div>
      {/* nom, prénom et R.s */}
      <div className='left'>
      <h2>Elkhattab Asmae</h2>
      <p>I'm a passionate <span>Web Developer </span>from Casablanca</p>
      {/* -----Social Links----- */}
      <div className='social-links'>
        <NavLink className='R_S'
          to={"https://www.linkedin.com/in/asmae-elkhattab-83b920255/"}  
          target="_blank"> 
            <Linkedin  className='linkedin'/>
        </NavLink>
        <NavLink className='R_S'
          to={"https://github.com/asmaeelk1"}  
          target="_blank"> 
            <Github  className='github'/>
        </NavLink>
        <NavLink className='R_S'
          to={"https://twitter.com/asmae_elkhattab"}  
          target="_blank"> 
            <Twitter  className='twitt'/>
        </NavLink>
        <NavLink className='R_S'
          to={"https://instagram.com/asmae_elk1/"}  
          target="_blank"> 
            <Instagram  className='insta'/>
        </NavLink>
        
      </div>
      </div>
      
    </div>
  )
}
