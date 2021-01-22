import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, showWorldTime } from '../../services/time.js'
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'
import "./WorldClocksContainer.css"

const WorldClocksContainer = () => {
  
  const [allTimeZones, setAllTimeZones] = useState([])
  const [worldtime, setWorldTime] = useState()
  // console.log(`WorldClocks(allTimeZones): ${allTimeZones}`)
  // console.log(`WorldClocks(filterFn): ${filterFn}`)
  //  useEffect(() => {
  //    setTimeout(() => setWorldTime(worldtime), 1000)
  //  })

  useEffect(() => {
    setTimeout(() => {
      fetchTimeZones()
    }, 2000)
  }) 
  // useEffect(() => {
  //   setWorldTime(worldtime)
  // }, [])

  const fetchTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const timezones = await getAllTimeZones();
    //setAllTimeZones with the value of the timezones that were just received
    setAllTimeZones(timezones)
  }
   
  return (
    <>
      {allTimeZones.map((worldclock) => (
        
          <WorldClock
            key={uuid4()}
            className="world-clock-container"
            timestamp={worldclock.timestamp}
          zonename={worldclock.zoneName}
          />
    
      ))}
    </>
  )
}


export default WorldClocksContainer;

