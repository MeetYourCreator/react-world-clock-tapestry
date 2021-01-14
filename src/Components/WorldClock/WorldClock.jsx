import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WorldClock = () => {
  const [apiData, setApiData] = useState('')
console.log(apiData)
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`
 

  useEffect(() => {
    const makeApiCall = async () => {
      const data = await axios.get(url)
      
      setApiData(data.data.zones)
    }
    makeApiCall();
  }, [])

  return (
    <>
      <div>{apiData.map(clock => console.table(clock))}</div>
    </>
  )
}

export default WorldClock;