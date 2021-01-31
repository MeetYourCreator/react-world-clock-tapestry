import React from "react"
import styled from "styled-components"
import "./WorldClock.css"

const ClockContainer = styled.section`
  
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
  font-family: "Pangolin", cursive;
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

const Clock = styled.div`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 50%);
`

const ClockText = styled.p`
  font-size: 25px;
  color: #000000;
  padding: 30px;
`
const WorldClock = ({ id, unix, zonename, country }) => {
  

  return (
    <>

        {country !== zonename && (
          <ClockContainer>
          <Clock>
            <ClockText>{unix}
            </ClockText>
          </Clock>
            <Location>
              {zonename}, {country}
            </Location>
          </ClockContainer>
        )}
    </>
  )
}

export default WorldClock
