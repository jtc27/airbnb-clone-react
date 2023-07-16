import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      
      <div className='searchPage__info'>
        <p>62 stays • date • 4 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">Flexibile Cancellation</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
    <SearchResult 
      img='https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=240'
      location='Private room in NYC'
      title='Stay at this spacious place'
      description= '1 guest • 3 bedroom • 1.5 bathrooms'
      star={4.3}
      price='$30 / night'
      total='$117 total'
    />
                <SearchResult
                img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/383834719.jpg?k=a8ed632aeaf2eb621e6753e941d4fb2f858005614b603cdef5bfe644ce1a1906&o=&hp=1"
                location="Private room in center of San Francisco"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                total="$157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of Chicago"
                title="Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in Phoenix"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={4.96}
                price="$60 / night"
                total="$450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private Apartment in Toronto"
                title="The Blue Room In Toronto"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="$65 / night"
                total="$480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Luxury Apartment in Miami"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.85}
                price="$90 / night"
                total="$650 total"
            />

    </div>
  )
}

export default SearchPage