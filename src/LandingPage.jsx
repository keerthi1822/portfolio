import React from 'react'
import myImg from "./asserts/myPicture.jpeg"

import './App.css'

const LandingPage = ({ColoredLine}) => {
  
  return (
    <div>
      <header className="App-header">

        <section className='padding intro'>
          <h2 className='padding'> Keerthika Devi <br /> Alampalli</h2>
          <ColoredLine color='gray' />
          <h5 className='padding'>Frontend developer</h5>
          <ColoredLine color='gray' />
        </section>
        <img src={myImg} alt="My Avatar" className='myImg' width="20%" />
      </header>
    </div>
  )
}

export default LandingPage