import React from 'react'
import "./Contact.css"
import { ChevronLeft ,  ChevronRight ,GeoAlt} from 'react-bootstrap-icons'
import { useSpring, animated } from 'react-spring';
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
      <div className='icon'><GeoAlt size='22px'/></div>
      <div className='after-icon'>
      <h3>My Address</h3> <br/>
      <p>Casablanca,Morocco</p>
      </div>

    </div>
    </FadeInUpDiv>
  )
}
