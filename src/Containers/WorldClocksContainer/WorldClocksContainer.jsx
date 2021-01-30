import React, { useEffect, useState } from "react"
import { v4 as uuid4 } from "uuid"
import {
  getAllTimeZones,
  showISO,
  formatZoneName,
} from "../../services/time.js"
import WorldClock from "../../Components/WorldClock/WorldClock.jsx"
import "./WorldClocksContainer.css"

const WorldClocksContainer = () => {
  const [allTimeZones, setAllTimeZones] = useState([])
  console.log(allTimeZones)

  console.log('%c%s','color: yellow; background: blue; font-size: 20px;','1-before useEffect')
  useEffect(() => {
    console.log("3-inside useEffect")
    setTimeout(fetchWorldTimeZones, 1000)
    console.log("4-after setTimeout")
  })
  console.log("2-after useEffect")

  const fetchWorldTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const timezones = await getAllTimeZones()
    console.log("6-data recieved")
    //setAllTimeZones with the value of the timezones that were just received
    setAllTimeZones(timezones)
  }

  return (
    <>
      {allTimeZones.map((worldclock) => (
        <WorldClock
          key={uuid4()}
          id={uuid4()}
          className="world-clock-container"
          unix={showISO(worldclock.timestamp)}
          zonename={formatZoneName(worldclock.zoneName)}
          country={worldclock.countryName}
        />
      ))}
    </>
  )
}

export default WorldClocksContainer
