import React from 'react'
import "./Portfolio.css"
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { useSpring, animated } from 'react-spring';

import TODO from "./to-do.png"
import BOOK from "./book-library.png"
import HORLOGE from "./horloge.png"
import HELLO from "./hello-there.png"

export default function Portfolio() {

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
      <p className='sec-title'>Portfolio</p>
      <p className='title'> < ChevronLeft/>MY WORKS /< ChevronRight/></p>
      <div className='contenaire-projet'>
      <img className='img-projet'src={TODO} alt='img'/>
      <img className='img-projet' src={BOOK} alt='img'/>
      <img className='img-projet' src={HORLOGE} alt='img'/>
      <img className='img-projet' src={HELLO} alt='img'/>
      </div>
    </div>
    </FadeInUpDiv>
  )
}
