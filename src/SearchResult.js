import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return (
    <div className='searchResult'>
      <img src={img} />
      <FavoriteBorderIcon className='searchResult__heart' />

     <div className='searchResult__info'>  {/* main container */}
        <div className='searchResult__info__Top'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>__________</p>
          <p>{description}</p>
        </div>

        <div className='searchResult__info__Bottom'>
          <div className='searchResult__stars'>
            <StarIcon className='searchResult__star' />
            <p><strong>{star}</strong></p>
          </div>
        </div>

        <div className='searchResult__price'>
          <h2>{price}</h2>
          <p>{total}</p>
        </div>
  
      </div>

    </div>
  )
}

export default SearchResult