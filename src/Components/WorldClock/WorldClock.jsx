import React from 'react'
import './WorldClock.css'

const WorldClock = ({timestamp, gmtoffset, zonename}) => {
  let time = timestamp - gmtoffset

  return (
    <>
      <div className={`world-clock-container`}>
        <p className="world-clock">
          <span className="unix-timestamp"></span> {timestamp}|| <span className='gmtOffset'>{time}</span>
        </p>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;