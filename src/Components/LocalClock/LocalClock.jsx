import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { showLocalTime } from "../../services/time.js"

const LocalClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #fac931;
  border-right: 2px solid #fac931;
  border-bottom: 2px solid #fac931;
  border-left: 2px solid #fac931;
  background-color: #EEE8AA;
`

const StyledLocalClock = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-family: "Pangolin", cursive;
  color: #ff0fd7;
`
const StyledLocalText = styled.p`
  margin-bottom: -20px;
  border-top: 2px solid black;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;
  color: black;
  font-size: 30px;
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
        <StyledLocalClock>{localTime}</StyledLocalClock>
        <StyledLocalText>LocalTime</StyledLocalText>
      </LocalClockContainer>
    </>
  )
}

export default LocalClock
