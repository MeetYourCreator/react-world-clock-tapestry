import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllWorldTimeZones } from '../../services/time.js'
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'
import "./WorldClocksContainer.css"

const WorldClocksContainer = () => {
  
  const [allWorldTimeZones, setAllWorldTimeZones] = useState([])
  console.log(allWorldTimeZones)
  
  console.log('1-before useEffect')
  useEffect(() => {
    console.log('3-inside useEffect')
    setTimeout(fetchWorldTimeZones, 1000)
    console.log("4-after setTimeout")
  }) 
  console.log('2-after useEffect')
 
  const fetchWorldTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const worldtimezones = await getAllWorldTimeZones();
    console.log('6-data recieved')
    //setAllTimeZones with the value of the timezones that were just received
    setAllWorldTimeZones(worldtimezones)
  }


  return (
    <>
      {allWorldTimeZones.map((worldtimezone) => (
        <WorldClock
          key={uuid4()}
          id={uuid4()}
          className="world-clock-container"
          utc={worldtimezone.timestamp - worldtimezone.gmtOffset}
          unix={worldtimezone.timestamp}
          gmtoffset={worldtimezone.gmtOffset}
          zonename={worldtimezone.zoneName}
        />
      ))}
    </>
  )
}


export default WorldClocksContainer;

