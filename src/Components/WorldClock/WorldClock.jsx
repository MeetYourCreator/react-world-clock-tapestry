import React from "react"
import styled from "styled-components"
import "./WorldClock.css"

const WorldClockContainer = styled.section`
  background-image: linear-gradient(to top right, #fa255e, #c39ea0, #f8e5e5);
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
  color: #000000;
  padding: 20px;
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
const WorldClock = ({ id, unix, zonename, country }) => {
  return (
    <>
      {country !== zonename && (
        <WorldClockContainer>
          <Clock>
            <ClockText>{unix}</ClockText>
          </Clock>
          <Location>
            {zonename}, {country}
          </Location>
        </WorldClockContainer>
      )}
    </>
  )
}

export default WorldClock
