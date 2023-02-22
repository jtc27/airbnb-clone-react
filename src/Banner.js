import React from 'react'
import './Banner.css'
import {Button} from "@mui/material"
import { useState } from 'react'

function Banner() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>

      <div className='banner__search'>
        {showSearch && <h1>SHOW DATE SELECTOR</h1>}
        <Button 
        onClick={() => setShowSearch(!showSearch)}
        variant='outlined'
        className='banner__searchButton'>
          Search Dates
        </Button>
      </div>

      <div className='banner__info'>
        <h1>Explore the world</h1>
        <h5>Get away and discover the world</h5>
        <Button variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner