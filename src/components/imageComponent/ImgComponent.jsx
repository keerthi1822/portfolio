import React from 'react'
import '../../App.css'


const ImgComponent = ({img,caption,angle,x,y}) => {

    const Style ={'--image':  `url(${img})`, '--angle': `${angle}`, '--y': `${y}`, '--x': `${x}`, '--caption': `${caption}`}
  return (
    <div className="imgCard" style={Style}></div>
  )
}

export default ImgComponent