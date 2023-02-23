import React from 'react'
import './Home.css'

import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
      <Banner />


      <div className='home__section'>
        <Card 
          src='https://a0.muscache.com/im/pictures/bb0813a6-e9fe-4f0a-81a8-161440085317.jpg?im_w=720'
          title='Online Experiences'
          description='Activites that we can do together, led by a world of hosts'
          />
        <Card 
          src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
          title='Unique stays'
          description='Spaces that are more than just a place to sleep'
        />
        <Card 
          src='https://a0.muscache.com/im/pictures/807af64a-c3ba-4075-9b76-e1f09531c974.jpg?im_w=720'
          title='Entire homes'
          description='Comfortable private places with room for friends and family'
        />
      </div>

      <div className='home__section'>
        <Card 
            src='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg'
            title='3 bedroom Apartment in Miami'
            description='Superhost with a stunning view of the beach in Miami'
            price='$130/night'
          />
        <Card 
          src='https://media.nomadicmatt.com/2018/apartment.jpg'
          title='House in LA'
          description='Centrally located Los Angeles apartment'
          price='$140/night'
        />
        <Card 
          src='https://media.nomadicmatt.com/2019/airbnb_breakup2.jpg'
          title='Aparment in NYC'
          description='Enjoy the amazing sites of NYC with this stunning place'
          price='$210/night'
        />
      </div>

    </div>
  )
}

export default Home