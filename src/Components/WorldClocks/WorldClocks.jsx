import React from 'react'
import WorldClock from '../WorldClock/WorldClock.jsx'
import { v4 as uuid4 } from "uuid"
const WorldClocks = (props) => {

  const { allTimeZones, worldTime } = props
  
 

  return (
    <>
      
        {allTimeZones.map((worldclock) => (
          <WorldClock
            key={uuid4()}
            timestamp={worldclock.timestamp}
            zonename={worldclock.zoneName}
            showTime={worldTime}
          />
        ))}
      
    </>
  )
}

export default WorldClocks;