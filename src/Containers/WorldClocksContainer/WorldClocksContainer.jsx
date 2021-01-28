import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuid4 } from 'uuid'
<<<<<<< HEAD
import { getAllWorldTimeZones } from '../../services/time.js'
=======
import {
  getAllTimeZones,
  getUnix,
  getGmtOffset,
  // getUtc
} from '../../services/time.js'
>>>>>>> develop
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'
import "./WorldClocksContainer.css"

const WorldClocksContainer = () => {
  
<<<<<<< HEAD
  const [allWorldTimeZones, setAllWorldTimeZones] = useState([])
  console.log(allWorldTimeZones)
=======
  const [allTimeZones, setAllTimeZones] = useState([])
  const [utc, setUtc] = useState(allTimeZones)
  // const [utc, setUtc] =useState('')
  console.log(allTimeZones)
>>>>>>> develop
  
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
    timezones.map((timezone) => {
      setUtc(timezone.timestamp - timezone.gmtOffset)
    })
    //setAllTimeZones with the value of the timezones that were just received
    setAllWorldTimeZones(worldtimezones)
  }


  return (
    <>
<<<<<<< HEAD
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
=======
      <WorldClock
        id={uuid4()}
        allTimeZones={allTimeZones}
        utc={utc}
        // utc={utc}
      />
>>>>>>> develop
    </>
  )
}


export default WorldClocksContainer;

