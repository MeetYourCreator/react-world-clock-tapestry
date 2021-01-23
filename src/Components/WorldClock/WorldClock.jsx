import React from 'react'
import './WorldClock.css'

const WorldClock = ({id, unix, gmtoffset, zonename}) => {
  // let time = unix - gmtoffset
  
  return (
    <>
      <div id={id} className={`world-clock-container`}>
        <p className="world-clock">
          <span className="unix-timestamp">{unix}</span>
          <span className='gmtoffset'>{gmtoffset}</span>
        </p>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;