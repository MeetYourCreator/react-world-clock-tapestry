import React, { useEffect, useState } from 'react'
import './WorldClock.css'
import { showWorldTime } from "../../services/showWorldTime.js"

const WorldClock = ({id, timestamp, zonename}) => {
  const [worldTime, setWorldTime] = useState(showWorldTime(timestamp))
  
  console.log(`${zonename}: ${worldTime}`)
  console.log(`${zonename}: ${timestamp}`)

  useEffect(() => {
    setTimeout(() => {
      setWorldTime(worldTime)
    }, 1000)
  }, []) 


  return (
    <>
      <div id={id} className='world-time-container'>
        <span className="world-clock">{worldTime}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;