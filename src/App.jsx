
import React from 'react';
import "./App.css"
import LocalClock from "./Components/LocalClock/LocalClock.jsx"
import WorldClock from './Components/WorldClock/WorldClock.jsx'

const App = () => {

  return (
    <>
      <div className='clock-grid'>
        <LocalClock />
        <WorldClock />
      </div>
    </>
)
}

export default App;

