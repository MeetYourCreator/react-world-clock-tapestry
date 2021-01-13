import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WorldClock = () => {
  const [apiData, setApiData] = useState('')
console.log(apiData)
  const url = `http://worldtimeapi.org/api/timezone/`
 

  useEffect(() => {
    const makeApiCall = async () => {
      const data = await axios.get(url)
      console.log(data.data)
      setApiData(data.data)
    }
    makeApiCall();
  }, [])

  return (
    <>
  
    </>
    
)
}

export default WorldClock;