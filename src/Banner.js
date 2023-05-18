import React from 'react'
import './Banner.css'
import {Button} from "@mui/material"
import { useState } from 'react'
import Search from './Search'
import {useNavigate} from 'react-router-dom'

function Banner() {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>

      <div className='banner__search'>
        {showSearch && <Search />}
        <Button 
        onClick={() => setShowSearch(!showSearch)}
        variant='outlined'
        className='banner__searchButton'>
          
          {showSearch ? 'Collapse Calendar' : 'Search Dates'}

        </Button>
      </div>

      <div className='banner__info'>
        <h1>Explore the world</h1>
        <h5>Find your next adventure</h5>
        <Button variant='outlined' onClick={() => navigate('/search')}>Find Places Nearby</Button>
      </div>
    </div>
  )
}

export default Banner