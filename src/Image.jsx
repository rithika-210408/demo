import React, {useState} from 'react'
import Rover from './Image.jpg'
import Img from './download.jpg'


const Image = () => {

    
    const[photo,setPhoto]=useState(Rover)
    const changer=function()
    {
      setPhoto(Img)
    }
  return (
    <div>
      <img src={photo} alt="cars"onMouseEnter={changer}></img>
    </div>
  )
}

export default Image