import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import './WorldClockContainer.css'
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'

const WorldClockContainer = () => {
  const [apiData, setApiData] = useState([])
  // const [worldTime, setWorldTime] = useState()

const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`
 
useEffect(() => {
   const makeApiCall = async () => {
     const data = await axios.get(url)

     setApiData(data.data.zones)
     console.log(data.data.zones)
   }
   makeApiCall()
 }, [])

  return (
    <>
      {apiData.map((clock) => (
        // console.table(clock)
        <WorldClock
          key={uuid4()}
          id={uuid4()}
          timestamp={clock.timestamp}
          zonename={clock.zoneName}
        />
      ))}
    </>
  )
}

export default WorldClockContainer;

