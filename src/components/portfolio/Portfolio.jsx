import React,{ useState} from 'react';
import { Link } from 'react-scroll'

import dashboard from "../../asserts/Dashboard.png"
import plata from "../../asserts/Plata.png"
import Syd from "../../asserts/sydDanskInnovation.PNG"
import vibildco from "../../asserts/vibildco.PNG"
import fabric from "../../asserts/fabric.PNG"



/* import './portfolio.css'; */
import '../../App.css';


const projects = [

  {
    id: 1,
    projectName: "Fintech",
    img: plata,
    technologiesUsed: ["React", "JavaScript", "Typescipt", "HTML/CSS", "Jest", "tailwindCSS"],
    company: "Plata",
    position: "React Developer. (01/2022 - 07/2022)",
    description: "building an application by automating the registration flow using React and maintaining the application consistency using DRY concepts. And mentoring student employees on the programming and React Application that we are working on."
  },
  {
    id: 2,
    projectName: "Profile",
    img: "not available",
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Postman"],
    company: "Code Art",
    position: "Frontend Developer(11/2020 - 06/2021)",
    description: "Responsible for developing end-to-end user-friendly and interactive profile management tool using functionalities in React hooks."

  },
  {
    id: 3,
    projectName: "Vibildco",
    link: "vibildco.dk",
    img: vibildco,
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Gatsby", "GraphQL", "Contentful", "sass"],
    company: "Code art",
    position: "Frontend Developer(11/2020 - 06/2021)",
    description: "esponsible for developing websites using Content Management systems like Umbraco and Contentful and tools like GraphQL, and Gatsby"

  },
  {
    id: 4,
    projectName: "Syddanskinnovation",
    link: "https://www.syddanskinnovation.dk/",
    img: Syd,
    technologiesUsed: ["HTML/CSS", "Umbraco", "Razor", "sass"],
    company: "Code art",
    position: "Frontend Developer(11/2020 - 06/2021)",
    description: "esponsible for developing websites using Content Management systems like Umbraco and Contentful and tools like GraphQL, and Gatsby"

  },
  {
    id: 5,
    projectName: "DashBoard",
    img: dashboard,
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Highcharts"],
    company: "Cyrix",
    position: "React Developer (09/2019 - 05/2020)",
    description: "Responsible for gathering specifications from the product development team and identification of optimal/suitable tech stack for dash-boarding by evaluating various front- end applications."

  },
  {
    id: 6,
    projectName: "Fabric",
    img: fabric,
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Highcharts", "NodeJs", "MySQL", "GIT"],
    company: "Freelancing",
    position: "Fullstack Developer (09/2019 - 05/2020)",
    description: "Upgrading and maintenance of application as per user needs and requirements using React and NodeJS"

  },

]

const Portfolio = ({ ColoredLine }) => {

  const [active,setActive] = useState("")

  /* const onFocusHandler =(i,project) => {
if(projects[i] = project) setActive(i)
  } */

  return (
    <div className="portfolio ">

      <h4 className='portfolio-heading '><span>Projects</span></h4>
      <>
       {/*  <div className="controls">
          {
            projects.map((p, i) =>
            
            <a   onClick={() => setActive(i)}
            className={`${active === i? "active controls__dot" : "controls__dot"}`} key={`controls${i}`} href={"#" + p.projectName}  >
              <span className="visuallyhidden">{p.id}</span>
            </a> 
           
            )
          }
        </div> */}
        <section className="projects carousel">

          {
            projects.map((p, i) => <div  id={p.projectName} key={`project${i}`} className={ "flipcard carousel__item " }>
              <div className='carousel__image project-img'  /* onLoad={setActive(i)} */>
                <img src={p.img} alt={p.projectName} />
              </div>
              <section>
              <div className='project-content'>
                  <h4>{p.company}</h4>
                </div>
                <div className='project-content'>
                  <h5>{p.position}</h5>
                  <p>{p.description}</p></div>
                <div  className='project-content'>
                  <h5>Technologies:</h5>
                  <ul className='tech '>{p.technologiesUsed.map((tech, i) => <li className='' key={`tech${i}`}>{tech}</li>)}</ul>
                </div>
              </section>

            </div>)
          }

        </section>

      </>
      {/* <ColoredLine color="gray"/> */}
    </div>
  )
}

export default Portfolio