import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './WorldClockChild.css'

const WorldClockChild = ({id, timestamp, zonename}) => {
  const [worldTime, setWorldTime] = useState('')
  
  console.log(`WorldTime: ${worldTime}`)


  useEffect(() => {
    setTimeout(() => {
      setWorldTime(showWorldTime())
    }, 1000)
  }, []) 

const showWorldTime = () => {
  let time = new Date(moment(timestamp))
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()
  let am_pm = "AM"

  if (hour > 12) {
    hour -= 12
    am_pm = "PM"
  } else {
    am_pm = "AM"
  }

  hour = hour < 10 ? "0" + hour : hour
  minute = minute < 10 ? "0" + minute : minute
  second = second < 10 ? "0" + second : second

  let currentTime = hour + ":" + minute + ":" + second + am_pm

  return currentTime
}

  


  return (
    <>
      <div id={id} className="world-time-container" >
        <span className="world-clock">{timestamp}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClockChild;