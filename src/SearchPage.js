import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'

function SearchPage() {
  return (
    <div className='searchPage'>
      
      <div className='searchPage__info'>
        <p>62 stays - date - 4 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">Flexibile Cancellation</Button>
        <Button variant="outlined">More Filters</Button>
      </div>


    </div>
  )
}

export default SearchPage