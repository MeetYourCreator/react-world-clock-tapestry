import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import './WorldClock.css'

const WorldClock = () => {
  const [apiData, setApiData] = useState([])
  const [worldTime, setWorldTime] = useState({})

 
  console.log()
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`
 

  console.log(`WorldTime: ${worldTime}`)


useEffect(() => {
   const makeApiCall = async () => {
     const data = await axios.get(url)

     setApiData(data.data.zones)
     console.log(data.data.zones)
   }
   makeApiCall()
 }, [])

  useEffect(() => {
    setTimeout(() => {
      setWorldTime(worldTime)
    }, 2000)
  }, [])

 
 
 
  return (
    <>
      {apiData.map((clock) => (
        // console.table(clock)
        <div
          key={uuid4()}
          className="world-time-container"
          timestamp={clock.timestamp}
        >
          <span className="world-clock">{clock.timestamp}</span>
          <p className="world-time-text">{clock.zoneName}</p>
        </div>
      ))}
    </>
  )
}

export default WorldClock;

