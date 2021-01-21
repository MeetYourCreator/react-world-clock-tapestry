import React from 'react'
import WorldClock from '../WorldClock/WorldClock.jsx'
import { v4 as uuid4 } from "uuid"
const WorldClocks = ({ allTimeZones, worldtime }) => {

  return (
    <>
        {allTimeZones.map((worldclock) => (
          <WorldClock
            key={uuid4()}
            timestamp={worldclock.timestamp}
            zonename={worldclock.zoneName}
            //passing a prop called worldtime with a value of {worldclock.timestamp}
            worldtime={worldclock.timestamp}
          />
        ))}
    </>
  )
}

export default WorldClocks;