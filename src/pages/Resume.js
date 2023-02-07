import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { useSpring, animated } from 'react-spring';
import "./Resume.css"
import WA from "./3w.png"
import OK from "./ok.jpeg"
import ZYNE from "./zyne.jpeg"

export default function Resume() {

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
      <p className='sec-title'>Resume</p>
      <p className='title'>< ChevronLeft/>CHECK MY RESUME /< ChevronRight/></p>
      <div className='contenaire-resume'>
        <div className='res-left'>
          <div className='sec-res'>
          <div className='sec-rond'>
          <div className='rond'></div>
          <div className='after-rond'></div>
          </div>
          <div className='res'>
            <h3 className='title-res'>Sumary</h3>
            <h4 className='title-text-res'>Elkhattab Asmae</h4>
          <p className='text-res'>I am a passionate and determined full stack web developer.
          My goal is to always provide superior quality solutions to my clients.
          Here are the three key skills I can bring to any project:</p>
          <ul className='ul-res'>
            <li>Technical Expertise</li>
            <li>Results-Oriented </li>
            <li>Flexibility and Adaptability</li>
          </ul>
          </div>
          </div>
          {/*  */}
          <div className='sec-res'>
          <div className='sec-rond'>
          <div className='rond'></div>
          <div className='after-rond'></div>
          </div>
          <div className='res'>
            <h3 className='title-res'>Internship</h3>
            <div className='date-res'>2019-2020</div>
            <em><img  src={ZYNE} alt='img'/> ZYNE</em>
          <p className='text-res'>My internship as a sales representative and stock manager was a unique opportunity to demonstrate my team spirit.
           Moreover, I had the flexibility to adapt to unexpected situations and work proactively to solve problems while enhancing my ability to work in a team.</p>
          </div>
          </div>  
        {/*  */}
           
        </div>
        <div className='res-right'>
          {/*  */}
          <div className='sec-res'>
          <div className='sec-rond'>
          <div className='rond'></div>
          <div className='after-rond'></div>
          </div>
          <div className='res'>
            <h3 className='title-res'>Education</h3>
            <h4 className='title-text-res'>Formation En Developpement</h4>
            <div className='date-res'>2022-2023</div>
            
            <em><img  src={WA} alt='img'/> 3W Academy</em>
          <p className='text-res'>I chose a training in web development, a completely new field for me.
           Nonetheless, I am filled with excitement about acquiring new skills and growing as a web developer.
           I believed that this training would help me achieve my goal of becoming a successful web developer and contributing to the constantly evolving digital world.</p>
          </div>
          </div>  

          <div className='sec-res'>
          <div className='sec-rond'>
          <div className='rond'></div>
          <div className='after-rond'></div>
          </div>
          <div className='res'>
            <h4 className='title-text-res'>Baccalaureate</h4>
            <div className='date-res'>2021-2022</div>
            <em><img  src={OK} alt='img'/> El Ouatki Kaoukabi</em>
          <p className='text-res'>I recently obtained my Bachelor's degree in Life and Earth Sciences,
           with a major in French. This marks the end of a significant chapter in my educational journey.</p>
          </div>
          </div>       
           
        </div>

      </div>
    </div>
    </FadeInUpDiv>
  )
}
