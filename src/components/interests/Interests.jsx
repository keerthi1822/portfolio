import React from 'react';

import ImgComponent from "../imageComponent/ImgComponent";

import ALadyWithHat from "../../asserts/myArtWork/ALadyWithHat.jpeg"
import BalaKrishna from "../../asserts/myArtWork/BalaKrishna.jpeg"
import Copenhagen from "../../asserts/myArtWork/Copenhagen.jpeg"
import FruitLady from "../../asserts/myArtWork/FruitLady.jpg"
import Ganesh from "../../asserts/myArtWork/Ganesh.jpeg"
import KrishnaAndACow from "../../asserts/myArtWork/KrishnaAndACow.jpeg"
import Krishnapainting from "../../asserts/myArtWork/Krishnapainting.jpeg"
import KrishnaPencilSketch from "../../asserts/myArtWork/KrishnaPencilSketch.jpeg"
import radhaKrishnadrawing from "../../asserts/myArtWork/radhaKrishnadrawing.jpeg"
import SplitTree from "../../asserts/myArtWork/SplitTree.JPG"
import Elephant from "../../asserts/myArtWork/Elephant.jpeg"
import PaintingLady from "../../asserts/myArtWork/PaintingLady.jpeg"
import OmNamahSivaya from "../../asserts/myArtWork/OmNamahSivaya.jpg"



import '../../App.css'



const coords = [
  
  {
    img: Elephant,
/*     angle: '-1deg', */
    x: '55%',
    y: '-30%',
    caption: 'Elephant'
  },
  {
    img: KrishnaAndACow,
    /* angle: '0deg', */
    x: '20%',
    y: '-30%',
    caption: 'Krishna and GoMatha'
  },
  {
    img: radhaKrishnadrawing,
    /* angle: '-5deg', */
    x: '55%',
    y: '30%',
    caption: 'radhaKrishnadrawing'
  },
  {
    img: ALadyWithHat,
    /* angle: '-4deg', */
    x: '20%',
    y: '30%',
    caption: 'ALadyWithHat'
  },

  {
    img: FruitLady,
    /* angle: '-7deg', */
    x: '-50%',
    y: '0%',
    caption: 'FruitLady'
  },
  {
    img: KrishnaPencilSketch,
    /* angle: '-7deg', */
    x: '55%',
    y: '0%',
    caption: 'KrishnaPencilSketch'
  },
  {
    img: BalaKrishna,
    /* angle: '-7deg', */
    x: '-15%',
    y: '-30%',
    caption: 'BalaKrishna'
  },
  {
    img: Copenhagen,
    /* angle: '-7deg', */
    x: '0%',
    y: '60%',
    caption: 'Copenhagen'
  },
  {
    img: Ganesh,
    /* angle: '-7deg', */
    x: '20%',
    y: '0%',
    caption: 'Ganesh'
  },
  {
    img: SplitTree,
    /* angle: '-7deg', */
    x: '-15%',
    y: '30%',
    caption: 'SplitTree'
  },
  {
    img: Krishnapainting,
/*     angle: '-1deg', */
    x: '-50%',
    y: '30%',
    caption: 'Krishnapainting'
  },
  {
    img: OmNamahSivaya,
/*     angle: '-1deg', */
    x: '-50%',
    y: '-30%',
    caption: 'Siva'
  },
  {
    img: PaintingLady,
/*     angle: '-1deg', */
    x: '-15%',
    y: '0%',
    caption: 'Colorful'
  }

]

const Interests = () => {
  return (
    <div className='interests'>
      <h4 className='interests-heading'>Interests</h4>

      <div className="card-container">
       
        {

          coords.map((coord) => <ImgComponent
            key={coord.caption}
            img={coord.img}
            angle={'0deg'}/* {coord.angle} */
            x={coord.x}
            y={coord.y}
            caption={coord.caption} />)
        }

      </div>

    </div>
  )
}

export default Interests