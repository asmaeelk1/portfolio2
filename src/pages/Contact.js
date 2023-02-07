import React from 'react'
import "./Contact.css"
import { ChevronLeft ,  ChevronRight ,EnvelopeAt,GeoAlt, Mailbox, Share, Telephone} from 'react-bootstrap-icons'
import { useSpring, animated } from 'react-spring';
import { NavLink} from 'react-router-dom'
import { Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
// import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  function FadeInUpDiv({ children }) {
    const props = useSpring({
        opacity: 1,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      });  
  return <animated.div style={props}>{children}</animated.div>;
  }


  return (
    <FadeInUpDiv>
    <div className='sec'>
      <p className='sec-title'>Contact</p>
      <p className='title'><ChevronLeft/>CONTACT /< ChevronRight/></p>
      <div className='ligne'>
      <div className='sec-contact'>
     <div className='icon'><GeoAlt size='22px'/></div>
      <div className='after-icon'>
      <div className='coll'>
        <h3>My Address</h3> 
      <p>Casablanca,Morocco</p>
      </div>
      </div>
     </div>
 
     <div className='sec-contact'>
     <div className='icon'><Share size='22px'/></div>
      <div className='after-icon'>
      <div className='coll'>
      <h3>Social Profiles</h3> 
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
     </div>
      </div>
      <div className='ligne'>
      <div className='sec-contact'>
     <div className='icon'><EnvelopeAt size='22px'/></div>
      <div className='after-icon'>
      <div className='coll'>
        <h3>Email Me</h3> 
      <p>elkhattabasmae0@gmail</p>
      </div>
      </div>
     </div>

     <div className='sec-contact'>
     <div className='icon'><Telephone size='22px'/></div>
      <div className='after-icon'>
      <div className='coll'>
        <h3>Call Me</h3> 
      <p>+212 770 811 989</p>
      </div>
      </div>
     </div>
      </div>

      <form className='contact-form'>
        <div className='ligne'>
          <input placeholder='Your Name' name='name' className='input-s'/>
          <input placeholder='Your Email' name='email' className='input-s'/>
        </div>
        <div className='ligne2'>
          <input type='text' placeholder='Subject' name='subject' className='input-l'/>
          <br/>
          <textarea placeholder='Message' name='message' className='input-xl'></textarea>
          <br/>
          <button className='btn-evy'>Sed Message</button>
    
        </div>
      </form>

    </div>
    </FadeInUpDiv>
  )
}
