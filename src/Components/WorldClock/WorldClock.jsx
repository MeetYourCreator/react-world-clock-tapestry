import React, { useState } from 'react'
import './WorldClock.css'

const WorldClock = ({id, unix, className, gmtoffset, zonename}) => {
  // let time = unix - gmtoffset
  
  return (
    <>
      <div id={id} className={className}>
        <button
          //NOTE: When the button is clicked the correct difference is alerted. BUT EXECUTING AN ALERT DOES NOT DOES NOT CHANGE STATE. That is why the correct difference can be alerted on an onClcik, when props are immutable in Child Components.
          onClick={() => {
            let utc = unix - gmtoffset
            alert(utc)
          }}
        ></button>
        <p className="world-clock">
          <span className="unix-timestamp">{unix}</span>
          <span className="gmtoffset">{gmtoffset}</span>
        </p>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;