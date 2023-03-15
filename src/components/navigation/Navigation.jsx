import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

import './navigation.css'

const Navigation = () => {

  return (
    <div className='navigation'>

      <div className='home-link'>

        <Link  to="#home" smooth>
          H!!OM!!E
        </Link>

      </div>

      <div  className='navigation-list'>
        <ul>

          <li>
            <Link to="#AboutMe" smooth >
              About me
            </Link>
          </li>

          <li>
            <Link to="#Portfolio"  smooth >
              Projects
            </Link>
          </li>

          <li>
            <Link to="#Education" smooth >
              Education
            </Link>
          </li>

          <li>
            <Link to="#Interests" smooth >
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation