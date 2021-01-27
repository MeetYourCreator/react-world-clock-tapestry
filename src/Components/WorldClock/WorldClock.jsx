import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones } from '../../services/time'
import './WorldClock.css'

const WorldClock = ({ allTimeZones, utc, id }) => {

  return (
    <>
      {allTimeZones.map((worldclock) => (
        <>
          <div
            key={id}
            className="world-clock-container"
          >
          <h3>UTC: {utc}</h3>
            <h4 className="unix-timestamp">unix: {worldclock.timestamp}</h4>
            <h5 className="gmtoffset"> gmtoffset: {worldclock.gmtOffset}</h5>
            <h6 className="world-clock"> zonename: {worldclock.zoneName}</h6>
          </div>
        </>
      ))}
    </>
  )
}

export default WorldClock;