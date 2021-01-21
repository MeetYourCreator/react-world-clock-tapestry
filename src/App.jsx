
import React from 'react';
import "./App.css"
import LocalClock from "./Components/LocalClock/LocalClock.jsx"
import WorldClockContainer from './Containers/WorldClockContainer/WorldClockContainer.jsx'

const App = () => {

  return (
    <>
      <div className='clock-grid'>
        <LocalClock />
        <WorldClockContainer />
      </div>
    </>
)
}

export default App;

