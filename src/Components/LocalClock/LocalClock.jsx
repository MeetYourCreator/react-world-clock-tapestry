import React, { useEffect, useState } from 'react';
import './LocalClock.css'


import { showLocalTime } from '../../services/showLocalTime.js'

const LocalClock = () => {
const [localTime, setLocalTime] = useState(showLocalTime())


  useEffect(() => {
    setTimeout(() => {
      setLocalTime(showLocalTime())
    }, 1000)
  
  }) 
 
  
  return (
    <>
      <div id="local-time-container">
        <div id="local-clock">{localTime}</div>
        
          <p id="time-text">LocalTime</p>
      </div>
    </>
  )

}

export default LocalClock;