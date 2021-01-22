import React from 'react'
// import { v4 as uuid4 } from "uuid"
import './WorldClock.css'

const WorldClock = ({id,timestamp, zonename}) => {
  

  return (
    <>
      <div className={`world-clock-container`}>
        <span className="world-clock">{timestamp}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;