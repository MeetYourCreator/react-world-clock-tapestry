import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, getTimeZone, showWorldTime } from '../../services/time.js'
import WorldClocks from '../../Components/WorldClocks/WorldClocks.jsx'
import "./WorldClockContainer.css"

const WorldClockContainer = () => {
  const [allTimeZones, setAllTimeZones] = useState([])
  const [worldTime, setWorldTime] = useState()
  console.log(`WorldClocks(allTimeZones): ${allTimeZones}`)
  // console.log(`WorldClocks(filterFn): ${filterFn}`)
//  useEffect(() => {
//    setTimeout(() => setWorldTime(showWorldTime(worldTime)), 1000)
//  })

  useEffect(() => {
    fetchTimeZones()
  }, [])

  useEffect(() => {
    setWorldTime()
  }, [])

  const fetchTimeZones = async () => {
    const timezones = await getAllTimeZones();
    setAllTimeZones(timezones)

  }
   
  return (
    <div>
      <WorldClocks
        showTime={worldTime}
        allTimeZones={allTimeZones}
        
        />
    </div>
  )
}

export default WorldClockContainer;

