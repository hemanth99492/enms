import React from 'react'
import EmpNav from './EmpNav.js'
import { useLocation } from 'react-router-dom'
function EmpHome() {
    const location = useLocation();
  return (
    <div>
      <div className='header'>
        <EmpNav/>
      </div>
      <div className='content'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>welcome {location.state.id}</h1>
      </div>
    </div>
  )
}

export default EmpHome
