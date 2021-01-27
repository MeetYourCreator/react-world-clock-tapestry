import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, getUnix, getGmtOffset } from '../../services/time.js'
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'
import "./WorldClocksContainer.css"

const WorldClocksContainer = () => {
  
  const [allTimeZones, setAllTimeZones] = useState([])
  const [unix, setUnix] = useState('')
  const [gmtOffset, setGmtOffset] = useState('')
  console.log(allTimeZones)
  
  console.log('1-before useEffect')
  useEffect(() => {
    console.log('3-inside useEffect')
    setTimeout(fetchTimeZones, 1000)
    setTimeout(fetchUnix, 1000)
    setTimeout(fetchGmtOffset, 1000)
    console.log("4-after setTimeout")
  }) 
  console.log('2-after useEffect')
 
  const fetchTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const timezones = await getAllTimeZones();
    console.log('6-data recieved')
    //setAllTimeZones with the value of the timezones that were just received
    setAllTimeZones(timezones)
  }


  const fetchUnix = async () => {
    const unix = await getUnix();
    setUnix(unix) 
  }

  const fetchGmtOffset = async () => {
    const gmtOffset = await getGmtOffset();
    setGmtOffset(gmtOffset)
  }

  return (
    <>
      <WorldClock
        allTimeZones={allTimeZones}
        unix={unix}
        gmtOffset={gmtOffset}
      />
    </>
  )
}


export default WorldClocksContainer;

