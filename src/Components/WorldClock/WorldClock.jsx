import React from 'react'
// import { v4 as uuid4 } from "uuid"
import './WorldClock.css'

const WorldClock = ({key, timestamp, zonename}) => {
  

  return (
    <>
      <div id={key}
        //passing a prop called worldtime with a value of timestamp
        worldtime={timestamp} className='world-time-container'>
        <span className="world-clock">{timestamp}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;