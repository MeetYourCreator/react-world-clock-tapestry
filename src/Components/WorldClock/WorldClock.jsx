import React, { useState } from 'react'
import './WorldClock.css'

const WorldClock = ({ id, unix, utc, className, gmtoffset, zonename }) => {

  return (
    <>
      <div id={id} className={className}>
        {/* <button
          //NOTE: When the button is clicked the correct difference is alerted. BUT EXECUTING AN ALERT DOES NOT DOES NOT CHANGE STATE. That is why the correct difference can be alerted on an onClcik, when props are immutable in Child Components.
          onClick={() => {
           alert(unix - gmtoffset)
          }}
        ></button> */}
        <p className="world-clock">
          {/* <span className="utc-timestamp">time: {time}</span>
          <span className="utc-timestamp">utc: {utc}</span> */}
          {/* {console.log(`In the return this is the time: ${time}`)} */}
         
          <span className="unix-timestamp">unix :{unix}</span>
         
        </p>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClock;