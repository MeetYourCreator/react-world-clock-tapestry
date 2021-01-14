import React, {useEffect, useState} from 'react'
import './WorldClockChild.css'

const WorldClockChild = ({id, timestamp, zonename}) => {
  const [worldTime, setworldtime] = useState(timestamp)
  
  console.log(`WorldTime: ${worldTime}`)


const showWorldTime = () => {
  let date = new Date(timestamp)
  let time = date.toTimeString()
  // let hour = time.getHours()
  // let minute = time.getMinutes()
  // let second = time.getSeconds()

  return time
}
  

  useEffect(() => {
    setTimeout(() => {
      setworldtime(worldTime)
    }, 1000)
  }, []) 

  return (
    <>
      <div id={id} timestamp={timestamp} className="world-time-container" setworldtime={showWorldTime()}>
        <span className="world-clock">{timestamp}</span>
        <p className="world-time-text">{zonename}</p>
      </div>
    </>
  )
}

export default WorldClockChild;