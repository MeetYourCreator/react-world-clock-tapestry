import React from "react"
import styled from "styled-components"
import "./WorldClock.css"

const WorldClock = ({ id, unix, className, zonename, country }) => {
  return (
    <>
      <div id={id} className={className}>
        <p className="world-clock">
          <span className="unix-timestamp">{unix}</span>
        </p>
        <p className="world-time-text">{zonename}, {country}</p>
      </div>
    </>
  )
}

export default WorldClock
