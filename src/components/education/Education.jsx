import React from 'react';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'


const education= [
  {
    instituteName:"JNTU University",
    degree:"Bachelors degree",
    specialization: "Information Technology",
    country:"India",
    icon:faGraduationCap
  },
  {
    instituteName:"Hack your future",
    degree:"Web development",
    specialization: "Information Technology",
    country:"Denmark",
    icon:faGraduationCap
  }
]

const Education = () => {
  return (
    <div className='education-section'>

<h4 className='education-heading '><span>Education</span></h4>
      <section className="education">
      
     
        {
          
          education.map((e, i) => <div key={`edu${i}`} className={"card "}>
           <div style={{color:"azure",width:'30px'}}> <i className="fa fa-graduation-cap" aria-hidden="true"></i>{/*  <FontAwesomeIcon icon={e.icon} /> */}</div>
          <p>{e.degree}</p>
          <p>{e.specialization}</p>
          <p>{e.instituteName}</p>
          <p>{e.country}</p>
          
          </div>)
        }
        
      </section>
      
    </div>
  )
}

export default Education