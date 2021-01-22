import React from 'react'
// import { v4 as uuid4 } from "uuid"
import './WorldClock.css'

const WorldClock = ({showzonetime, timestamp, zonename}) => {
  

  return (
    <>
      <div className={`world-clock-container`} showzonetime={timestamp}>
        <span className="world-clock">{timestamp}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;