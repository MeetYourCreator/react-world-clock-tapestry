import React from 'react'
import WorldClock from '../WorldClock/WorldClock.jsx'

const WorldClocks = (props) => {

  const { allTimeZones } = props
  return (
    <div>
      {allTimeZones.map(clock => (
      <WorldClock
        id={clock.id}
        key={clock.id}
        timestamp={clock.timestamp}
        zonename={clock.zonename}
        />
      ))
      }
    </div>
  )
}

export default WorldClocks;