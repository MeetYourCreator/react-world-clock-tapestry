import React from "react"
import styled from "styled-components"
import "./WorldClock.css"

const WorldClockContainer = styled.section`
  background-image: linear-gradient(to top right, #0072b5, #c39ea0, #f8e5e5);
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
    width: 310px;
    height: auto;
  }
`
const ClockText = styled.p`
  display: flex;
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
  font-size: 11px;
  font-family: "Noto Sans TC", sans-serif;
  @media (max-width: 505px) {
    font-size: 15px;
  }
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
