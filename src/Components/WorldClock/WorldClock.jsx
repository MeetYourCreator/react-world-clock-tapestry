import React from 'react'
import './WorldClock.css'

const WorldClock = ({timestamp, gmtoffset, zonename}) => {
  

  return (
    <>
      <div className={`world-clock-container`}>
        <p className="world-clock">
          <span className="unix-timestamp">{timestamp}</span> || <span className='gmtOffset'>{gmtoffset}</span>
        </p>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;