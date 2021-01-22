import React from 'react';
import "./App.css"
import LocalClock from "./Components/LocalClock/LocalClock.jsx"
import WorldClocksContainer from './Containers/WorldClocksContainer/WorldClocksContainer.jsx'

const App = () => {

  return (
    <>
      <div className='clock-grid'>
        <LocalClock />
        <WorldClocksContainer />
      </div>
    </>
)
}

export default App;

