import React from 'react'
import './WorldClockChild.css'

const WorldClockChild = ({id, timestamp, zonename}) => {

  return (
    <>
      <div id={id} className="world-time-container">
        <span className="world-clock">{timestamp}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClockChild;