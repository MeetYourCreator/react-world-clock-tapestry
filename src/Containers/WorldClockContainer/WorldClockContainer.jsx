import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, showWorldTime } from '../../services/time.js'
import WorldClocks from '../../Components/WorldClocks/WorldClocks.jsx'
import "./WorldClockContainer.css"

const WorldClockContainer = () => {
  const [allTimeZones, setAllTimeZones] = useState([])
  // const [worldTime, setWorldTime] = useState()


  useEffect(() => {
    fetchTimeZones()
  }, [])

  const fetchTimeZones = async () => {
    const timezones = await getAllTimeZones();
    setAllTimeZones(timezones)

  }
   
  return (
    <div>
        <WorldClocks
        allTimeZones={allTimeZones}
        filterFn={((timezone) => timezone === timezone.id)}
        />
    </div>
  )
}

export default WorldClockContainer;

