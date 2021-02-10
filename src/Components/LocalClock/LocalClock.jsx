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
  padding-top: 40px;
  padding-bottom: 30px;
  @media (max-width: 505px) {
    width: 320px;
    height: auto;
  }
`
const Clock = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 150px;
  height: auto;
  border: 3px solid #000000;
  border-radius: 10%;
  background-color: #151617;
  @media (max-width: 505px) {
    width: 290px;
    height: auto;
  }
`
const ClockText = styled.p`
  display: flex;
  margin: 40px 0px;
  text-shadow: 3px 3px 20px #f70300;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-family: "Press Start 2P", cursive;
  color: rgb(247, 1, 3);
  @media (max-width: 505px) {
    font-size: 25px;
  }
`
const Location = styled.p`
  margin-top: 15px;
  margin-right: 7px;
  margin-bottom: 5px;
  margin-left: 7px;
  border-top: 2px solid black;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;
  font-size: 13px;
  font-family: "Noto Sans TC", sans-serif;
  font-variant: small-caps;
  @media (max-width: 505px) {
    font-size: 15px;
  }
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
