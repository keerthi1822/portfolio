import React, { useState } from 'react';
import { Link } from "react-scroll";

/* import { Link } from 'react-router-dom'; */

import './navigation.css'

const Navigation = () => {

  const [active, setActive] = useState()
  /*   const [isActive, setIsActive] = useState(true && active) */

  return (
    <div className='navigation'>

      <div className='home-link'>

        <Link activeClass="active" smooth spy to="home">
          H!!OM!!E
        </Link>

      </div>

      <ul className='navigation-list'>

        <li>
          <Link activeClass="active" smooth spy to="AboutMe">
            About me
          </Link>
        </li>

        <li>
          <Link activeClass="active" smooth spy to="Portfolio">
            Portfolio
          </Link>
        </li>

        <li>
          <Link activeClass="active" smooth spy to="Education">
            Education
          </Link>
        </li>
        <li>

          <Link activeClass="active" smooth spy to="EducContactation">
            Contact
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navigation