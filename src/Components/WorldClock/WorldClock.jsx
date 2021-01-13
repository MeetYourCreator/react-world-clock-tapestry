import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WorldClock = () => {
  const [apiData, setApiData] = useState('')

  useEffect(() => {
    const makeApiCall = async () => {
      const data = await axios.get("http://worldtimeapi.org/api/timezone")
      console.table(data.data)
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