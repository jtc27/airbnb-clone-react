import React from 'react'
import './Search.css'
import { useState } from 'react';
import { addDays } from 'date-fns';
import PeopleIcon from '@mui/icons-material/People'
import { Button } from '@mui/material';

// https://www.npmjs.com/package/react-date-range
// also: npm i date-fns
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Search() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <div className='search'>
      <DateRangePicker
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      <h2>
        Number of Guests
        <PeopleIcon />
        <input min={0}
        defaultValue={2}
        type='number'
        />
        <Button>Search MyBnb</Button>
      </h2>
    </div>
  )
}

export default Search