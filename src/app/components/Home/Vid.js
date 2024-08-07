import React from 'react'
import "./styles/Vid.css"
import {vid} from "../../assets/Videos/vid.mp4"

const Vid = () => {
  return (
    <div className='vidmain'>
      <video src={vid} autoPlay loop muted />
    </div>
  )
}

export default Vid
