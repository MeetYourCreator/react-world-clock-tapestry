import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones } from '../../services/time'
import './WorldClock.css'

const WorldClock = ({ allTimeZones, unix, gmtOffset }) => {

  return (
    <>
      {allTimeZones.map((worldclock) => (
        <>
          <div key={uuid4()} className="world-clock-container">
            <h2 className="unix-timestamp">unix{worldclock.timestamp}</h2>
            <h3 className="gmtoffset"> gmtoffset: {worldclock.gmtOffset}</h3>
            <h4 className="world-clock"> zonename: {worldclock.zoneName}</h4>
          </div>
        </>
      ))}
    </>
  )
}

export default WorldClock;