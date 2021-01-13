import React, { useEffect, useState } from 'react';


import { showTime } from '../../showTime.js'

const LocalClock = () => {
const [localTime, setLocalTime] = useState(showTime())


  useEffect(() => {
    setTimeout(() => {
      setLocalTime(showTime())
    }, 1000)
  
  }) 

  return (
    <>
      <div>{localTime}</div>
    </>
  )

}

export default LocalClock;