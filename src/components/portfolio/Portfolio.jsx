import React from 'react';

import dashboard from "../../asserts/Dashboard.png"
import plata from "../../asserts/Plata.png"
import Syd from "../../asserts/sydDanskInnovation.PNG"
import vibildco from "../../asserts/vibildco.PNG"
import fabric from "../../asserts/fabric.PNG"
import codeart from "../../asserts/codeart.PNG"
import relate from "../../asserts/Relate.jpg"


/* import './portfolio.css'; */
import '../../App.css';


const projects = [

  {
    id: 7,
    projectName: "Relate",
    img: relate,
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Google Cloud", "NodeJs", "Project Management", "GIT"],
    company: "Freelancing",
    position: "Web Developer (04/2023 - present)",
    description: "Developing intricate survey web pages with a user-friendly design utilizing React, JavaScript, and Firebase, while also assuming responsibility for gathering client requirements and managing the entire project through the application of cutting-edge project management tools and technology."
  },

  {
    id: 6,
    projectName: "Fintech",
    img: plata,
    technologiesUsed: ["React", "JavaScript", "Typescipt", "HTML/CSS", "Jest", "TailwindCSS","Postman"],
    company: "Plata",
    position: "React Developer. (01/2022 - 07/2022)",
    description: "Building an application by automating the registration flow using React and maintaining the application consistency using DRY concepts. And mentoring student employees on the programming and React Application that we are working on."
  },
  {
    id: 5,
    projectName: "Profile",
    img: codeart,
    technologiesUsed: ["React Hooks", "JavaScript", "HTML/CSS", "Postman"],
    company: "Code Art",
    position: "Frontend Developer(11/2020 - 06/2021)",
    description: "Responsible for developing end-to-end user-friendly and interactive profile management tool using functionalities in React hooks."

  },
  {
    id: 4,
    projectName: "Vibildco",
    link: "vibildco.dk",
    img: vibildco,
    technologiesUsed: ["React", "JavaScript", "HTML", "Gatsby", "GraphQL", "Contentful", "CSS/SASS"],
    company: "Code art",
    position: "Frontend Developer(11/2020 - 06/2021)",
    description: "Responsible for developing websites using Content Management systems like Umbraco and Contentful and tools like GraphQL, and Gatsby"

  },
  {
    id: 3,
    projectName: "Syddanskinnovation",
    link: "https://www.syddanskinnovation.dk/",
    img: Syd,
    technologiesUsed: ["HTML", "Umbraco", "Razor", "CSS/SASS"],
    company: "Code art",
    position: "Frontend Developer(11/2020 - 06/2021)",
    description: "Responsible for developing websites using Content Management systems like Umbraco and Contentful and tools like GraphQL, and Gatsby"

  },
  {
    id: 2,
    projectName: "DashBoard",
    img: dashboard,
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Highcharts"],
    company: "Cyrix",
    position: "React Developer (09/2019 - 05/2020)",
    description: "Responsible for gathering specifications from the product development team and identification of optimal/suitable tech stack for dash-boarding by evaluating various front- end applications."

  },
  {
    id: 1,
    projectName: "Fabric",
    img: fabric,
    technologiesUsed: ["React", "JavaScript", "HTML/CSS", "Highcharts", "NodeJs", "MySQL", "GIT"],
    company: "Freelancing",
    position: "Fullstack Developer (09/2019 - 05/2020)",
    description: "Upgrading and maintenance of application as per user needs and requirements using React and NodeJS"

  },
 

]

const Portfolio = ({ ColoredLine }) => {

  return (
    <div className="portfolio ">

      <h4 className='portfolio-heading '><span>Projects</span></h4>
      <>
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
                  <ul className='tech'>{p.technologiesUsed.map((tech, i) => <li className='' key={`tech${i}`}>{tech}</li>)}</ul>
                </div>
              </section>

            </div>)
          }

        </section>

      </>
    </div>
  )
}

export default Portfolio