import React,{ useState } from 'react';

/* import LandingPage from '../../LandingPage';
import AboutMe from '../aboutme/AboutMe';
import Education from '../education/Education';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact'; */


import './navigation.css'

const Navigation = () => {

   const [active,setActive] = useState()

  return (
    <div className='navigation'>

      <div className='home-link'>
        <a href="home"    onClick={() => setActive("home")} className={`${active === "home" ? "active" : ""}`}>
          H!!OM!!E
        </a>
      </div>


      <ul className='navigation-list'>


        <li><a href="#AboutMe"   onClick={() => setActive("AboutMe")} className={`${active === "AboutMe" ? "active" : ""}`}>About me </a ></li>

        <li>
          <a href="#Portfolio"  onClick={() => setActive("Portfolio")} className={`${active === "Portfolio" ? "active" : ""}`}>
            Porfolio</a></li>
        <li>
          <a href="#Education"   onClick={() => setActive("Education")} className={`${active === "Education" ? "active" : ""}`}>
            Education</a></li>
        <li>
          <a href="#Contact"  onClick={() => setActive("Contact")} className={`${active === "Contact" ? "active" : ""}`}>
            Contact</a></li>
        
      </ul>

    </div>
  )
}

export default Navigation