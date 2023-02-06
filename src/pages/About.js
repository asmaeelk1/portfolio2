import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import './About.css'
import pic from './me.jpg'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring';
function SkillBar({ skill, level }) {
    // const[progressbar , setProgressbar] = useState(0)
    // let t = setInterval(() => {
    //     console.log("fff")
    //     if(progressbar >= 70)
    //     {
    //       setProgressbar(70)
    //       clearInterval(t)
    //     }
    //     else
    //       setProgressbar(s => s + 1)
    //   },500)
    //   console.log(progressbar)
  return (
    <div className="mb-3" >
      <div className='level-skill'>
      <p>{skill}</p>
      <p> {level}%</p>

      </div>
      
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${level}%`, backgroundColor:'#18D26E'}}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        >
         
        </div>
      
      </div>
    </div>
  );
}

export default function About() {
  const [skills1, setSkills1] = useState([
    { skill: 'HTML', level: 100 },
    { skill: 'CSS', level: 100 },
    { skill: 'JavaScript', level: 80 },
    
  ]);
   
  const [skills2,stSkills2] =useState([
    { skill: 'React', level: 75 },
    { skill: 'PHP', level: 85 },
    { skill: 'Laravel', level: 80 },
  ])
//----animaton funcyion----
function FadeInUpDiv({ children }) {
  const props = useSpring({
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
    });  
return <animated.div style={props}>{children}</animated.div>;
}

//
  return (
    <FadeInUpDiv>
    <div className='sec'>
      <p className='sec-title'>About</p>
      <p className='title'>< ChevronLeft/>LEARN MORE ABOUT ME /< ChevronRight/></p>
       <div className='learnMore'>
        {/* <section className='me'></section> */}
        <img src={pic} alt='img' className='me'/>
        <section className='aboutMe'>
          <h2>Web Developer </h2>
          <p>I am Asmae Elkhattab, a student with expertise in web development and strong abilities in both professional communication and interaction.</p>
          <div className="row">
            <div className="col-lg-6 info">
              <ul>
                <li>< ChevronRight className='fleche'/> <strong>Birthday:</strong> <span>04 September 2004</span></li>
                <li>< ChevronRight className='fleche'/> <strong>Phone:</strong> <span>+212 770 811 989</span></li>
                <li>< ChevronRight className='fleche'/> <strong>City:</strong> <span>Casablanca, Marocco</span></li>
              </ul>
            </div>
            <div className="col-lg-6 info">
              <ul>
                <li>< ChevronRight className='fleche'/> <strong>Age:</strong> <span>18</span></li>
                <li>< ChevronRight className='fleche'/> <strong>Email:</strong> <span>elkhattabasmae0@gmail.com</span></li>
                <li>< ChevronRight className='fleche'/> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <div className='description'><p>I am a passionate and driven full-stack web developer. I am able to work on all layers of a web application, from the back-end to the database and front-end. I am constantly acquiring new skills to become a more efficient developer and to provide the best possible service to my clients.</p></div>
        
        </section>
      </div>
        <p className='title'>< ChevronLeft/>SKILLS /<ChevronRight/></p>
        <div className='skillsBar'>
        <div className='skillBar'>
        {skills1.map((skill) => (
          <SkillBar key={skill.skill} skill={skill.skill} level={skill.level}  />
        ))}
      </div>
      
      <div className='skillBar'>
        {skills2.map((skill) => (
          <SkillBar key={skill.skill} skill={skill.skill} level={skill.level}  />
        ))}
      </div>
        </div>

    </div>
    </FadeInUpDiv>
  )
}
