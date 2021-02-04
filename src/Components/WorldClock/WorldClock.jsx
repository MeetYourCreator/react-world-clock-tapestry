import React from "react"
import styled from "styled-components"
import "./WorldClock.css"

const WorldClockContainer = styled.section`
  :root {
    --neon-text-color: #f40;
    --neon-border-color: #08f;
  }
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
  :root {
    --neon-text-color: #f40;
    --neon-border-color: #08f;
  }
  box-sizing: border-box;
  position: relative;
  width: 150px;
  height: auto;
  border: 3px solid #000000;
  border-radius: 10%;
  background-color: rgba(255, 255, 255, 50%);
`

const ClockText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "Pangolin", cursive;
  color: #000000;
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
