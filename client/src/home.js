import React from 'react'
import Navbar from './navbar.js'
import { useLocation } from 'react-router-dom'
function Home() {
    const location = useLocation();
  return (
    <div>
      <div className='header'>
        <Navbar/>
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

export default Home
