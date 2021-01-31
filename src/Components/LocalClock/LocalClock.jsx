import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { showLocalTime } from "../../services/time.js"

const LocalClockContainer = styled.section`
  background-image: linear-gradient(to top right, #eee8aa, #c39ea0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #fac931;
  border-right: 2px solid #fac931;
  border-bottom: 2px solid #fac931;
  border-left: 2px solid #fac931;
  padding-top: 30px;
`
const Clock = styled.div`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 50%);
`
const ClockText = styled.p`
  font-size: 25px;
  font-family: "Pangolin", cursive;
  color: #ff0fd7;
  padding: 30px;
`
const Location = styled.p`
  margin-bottom: 5px;
  margin-left: 7px;
  margin-right: 7px;
  border-top: 2px solid black;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;
  font-size: 11px;
  font-family: "Noto Sans TC", sans-serif;
`
const LocalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime())

  useEffect(() => {
    setTimeout(() => {
      setLocalTime(showLocalTime())
    }, 1000)
  })

  return (
    <>
      <LocalClockContainer>
        <Clock>
          <ClockText>{localTime}</ClockText>
        </Clock>
        <Location>LocalTime</Location>
      </LocalClockContainer>
    </>
  )
}

export default LocalClock
