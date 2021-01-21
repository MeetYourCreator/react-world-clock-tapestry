import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, showWorldTime } from '../../services/time.js'
import WorldClocks from '../../Components/WorldClocks/WorldClocks.jsx'
import "./WorldClockContainer.css"

const WorldClockContainer = () => {
  const [allTimeZones, setAllTimeZones] = useState([])
  const [worldtime, setWorldTime] = useState(showWorldTime())
  console.log(`WorldClocks(allTimeZones): ${allTimeZones}`)
  // console.log(`WorldClocks(filterFn): ${filterFn}`)
 useEffect(() => {
   setTimeout(() => setWorldTime(worldtime), 1000)
 })

  useEffect(() => {
    fetchTimeZones()
  }, [])

  useEffect(() => {
    setWorldTime(worldtime)
  }, [])

  const fetchTimeZones = async () => {
    const timezones = await getAllTimeZones();
    setAllTimeZones(timezones)

  }
   
  return (
    <>
      <WorldClocks
        worldtime={worldtime}
        allTimeZones={allTimeZones}
        />
    </>
  )
}

export default WorldClockContainer;

