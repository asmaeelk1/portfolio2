import React from 'react'
import "./Portfolio.css"
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { useSpring, animated } from 'react-spring';
import LIENS from "./link-45deg.svg"
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
      <p className='title'>< ChevronLeft/>MY WORKS /< ChevronRight/></p>
      <div className='contenaire-projet'>
      <div className='sec-projet'>
        <img className='img-projet'src={TODO} alt='img'/>
        <h4 className='title-projet'>< ChevronLeft/>To do list /< ChevronRight/><a target={'_blank'} href='https://asmaeelk1.github.io/to_do_liste/'><img className='liens' src={LIENS} /></a></h4>
      </div>
      <div className='sec-projet'>
        <div className='img-after'></div>
      <img className='img-projet' src={BOOK} alt='img'/>
      <h4 className='title-projet'>< ChevronLeft/>Books Library /< ChevronRight/><a target={'_blank'} href='https://asmaeelk1.github.io/book_library/'><img className='liens' src={LIENS} /></a></h4>
      </div>
      <div className='sec-projet'>
      <img className='img-projet' src={HORLOGE} alt='img'/>
      <h4 className='title-projet'>< ChevronLeft/>Horloge /< ChevronRight/><a target={'_blank'} href='https://asmaeelk1.github.io/horloge/'><img className='liens' src={LIENS} /></a></h4>
      </div>
      <div className='sec-projet'>
      <img className='img-projet' src={HELLO} alt='img'/>
      <h4 className='title-projet'>< ChevronLeft/>Hello There /< ChevronRight/><a target={'_blank'} href='https://asmaeelk1.github.io/hello-there/'><img className='liens' src={LIENS} /></a></h4>
      </div>
      </div>
    </div>
    </FadeInUpDiv>
  )
}
