import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import './WorldClock.css'

const WorldClock = () => {
  const [apiData, setApiData] = useState([])
  const [worldTime, setWorldTime] = useState({})
  console.log(apiData)
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`
 

  console.log(`WorldTime: ${worldTime}`)


useEffect(() => {
   const makeApiCall = async () => {
     const data = await axios.get(url)

     setApiData(data.data.zones)
   }
   makeApiCall()
 }, [])

  useEffect(() => {
    setTimeout(() => {
    setWorldTime(showWorldTime)
    }, 2000)
  }, [])

 const showWorldTime = () => {
   let time = new Date()
   console.log(`Time: ${time}`)
    let hour = time.setHours()
    let minute = time.setMinutes()
    let second = time.setSeconds()
    let am_pm = "AM"

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    let wt= hour + ":" + minute + ":" + second + am_pm
  console.log(wt)
    return wt
 }
  
  console.log(showWorldTime.time)
  showWorldTime()
  return (
    <>

        {apiData.map((clock) =>
          // console.table(clock)
          <div key={uuid4()} className='world-time-container'>
            <span className='world-clock'>{clock.timestamp}</span>
            <p className='world-time-text'>{clock.zoneName}</p>
          </div>
        )}
    </>
  )
}

export default WorldClock;

