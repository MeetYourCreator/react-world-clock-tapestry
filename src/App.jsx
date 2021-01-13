
import React from 'react';
import "./App.css"
import LocalClock from "./Components/LocalClock/LocalClock.jsx"

const App = () => {

  return (
    <>
      <div className='clock-grid'>
        <LocalClock />
      </div>
    </>
)
}

export default App;

