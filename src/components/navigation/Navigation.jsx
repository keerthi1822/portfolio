import React from 'react';
import { Link } from "react-scroll";

import './navigation.css'

const Navigation = () => {

  return (
    <div className='navigation'>

      <div className='home-link'>

        <Link activeClass="active" smooth spy to="home">
          H!!OM!!E
        </Link>

      </div>

      <div  className='navigation-list'>
        <ul>

          <li>
            <Link activeClass="active" smooth spy to="AboutMe">
              About me
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="Portfolio">
              Projects
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="Education">
              Education
            </Link>
          </li>
        {/*   <li>

            <Link activeClass="active" smooth spy to="EducContactation">
              Contact
            </Link>
          </li> */}

        </ul>
      </div>
    </div>
  )
}

export default Navigation