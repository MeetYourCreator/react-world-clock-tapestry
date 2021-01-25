import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, showWorldTime } from '../../services/time.js'
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'
import "./WorldClocksContainer.css"

const WorldClocksContainer = ({onClick}) => {
  
  const [allTimeZones, setAllTimeZones] = useState([])
  console.log(allTimeZones)
  const [loading, setLoading] = useState(false)
  const [clicked, setClicked] = useState(false)

  console.log('1-before useEffect')
  useEffect(() => {
    setLoading(true)
    console.log('3-inside useEffect')
    setTimeout(fetchTimeZones, 1000)
    console.log("4-after setTimeout")
  }) 
  console.log('2-after useEffect')
 
  const fetchTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const timezones = await getAllTimeZones();
    console.log('6-data recieved')
    //setAllTimeZones with the value of the timezones that were just received
    setAllTimeZones(timezones)
  }

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <>
      {allTimeZones.map((worldclock) => (
        <>
          <button className='wcc-btn'
            onClick={handleClick} 
            disabled={clicked}
          >WorldClocksContainer Button</button>
          <WorldClock
            onClick={() => console.log("hello")}
            key={uuid4()}
            id={uuid4()}
            className="world-clock-container"
            // utc={utc}
            unix={worldclock.timestamp}
            gmtoffset={worldclock.gmtOffset}
            zonename={worldclock.zoneName}
          />
        </>
      ))}
    </>
  )
}


export default WorldClocksContainer;

