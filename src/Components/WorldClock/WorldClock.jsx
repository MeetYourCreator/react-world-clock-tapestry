import React, { useState } from 'react'
import './WorldClock.css'

const WorldClock = ({id, unix, utc, className, gmtoffset, zonename}) => {
  // let time = unix - gmtoffset
  
  return (
    <>
      <div id={id} className={className}>
        <button
          //NOTE: When the button is clicked the correct difference is alerted. BUT EXECUTING AN ALERT DOES NOT DOES NOT CHANGE STATE. That is why the correct difference can be alerted on an onClcik, when props are immutable in Child Components.
          onClick={() => {
            var unixTimestamp = 1553617238
            var date = new Date(unixTimestamp * 1000)
            alert(date);
          }}
        ></button>
        <p className="world-clock">
          <p className="utc-timestamp">utc: {utc}</p>
          <p className="unix-timestamp">unix: {unix}</p>
          <p className="gmtoffset">gmtoffset: {gmtoffset}</p>
        </p>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;