# myBnb react

## Deployed

The app is deployed at [https://airbnb-clone-81d4a.web.app/](https://airbnb-clone-81d4a.web.app/)

## About this Project

This is a search app for bnb and hotel stays.

<img src="src/images/mybnb-preview.png" height="300">

If you click on the "Search Dates" bar a calendar will slide out.  The date range selector was developed at [https://www.npmjs.com/package/react-date-range](https://www.npmjs.com/package/react-date-range).  Click "Search MyBnb" to start a search.

<img src="src/images/mybnb-preview.png1" height="300">

The headshot API was last updated for the 2017-2018 season, so some player images will not be current.  For example Lebron James is pictured below in a Cleveland Cavaliers uniform (2017), but as of now (2022) he is a member of the LA Lakers:

<img src="https://raw.githubusercontent.com/jtc27/nba-players-react/main/src/images/github-preview/b.png" height="400">

Besides the photos, all player information is taken from the balldontlie API [https://www.balldontlie.io/](https://www.balldontlie.io/).  It contains player and team statistics from 1979 to the current season.

In the picture above you can see Lebron James' personal statistics for the 2021-22 NBA season.  All of the player info was taken from the API, except PER.  (PER is shown in the orange badge; Lebron's is displayed as 25.35 PER)  

PER (Player Efficiency Rating) is an NBA formula.  This formula takes all of the player's individual statistics and outputs a single value which marks how valuable he is.  It is a complex formula and I used a simplified version of it from here: [https://www.sportsbettingdime.com/guides/how-to/calculate-per/](https://www.sportsbettingdime.com/guides/how-to/calculate-per/).  In basketball PER is sometimes used as an argument for a player's overall value but its usefulness remains debatable. 

There are limitations to the balldontlie API.  Data for players previous to the current generation seems to be nearly non-existent.  Tim Duncan (played 1997-2016) is one of the all-time great players who retired in 2016.  Yet he has no data on this API.  Neither are Michael Jordan (played 1984-2003) or Shaquille O'Neal (played 1992-2011), both iconic players who have no data on this API.  So while it is advertised as hosting data for players 1979-current, the data is relatively scant.

<img src="https://raw.githubusercontent.com/jtc27/nba-players-react/main/src/images/github-preview/c.png" height="350">

Overall, for a free NBA API this one is quite decent and usable.  Perhaps in the future I can find a more complete data source and update my app.  I did enjoy using it and building this site, as there seems to be a scarcity of good APIs out there for NBA related data.

## Stack

### Project

| Dependencies  | Description |
| ------------- | ------------- |
|  [Tailwind](https://tailwindcss.com/)  | Tailwind CSS |
|  [daisyUI](https://daisyui.com/)  | daisyUI  |
|  [https://www.balldontlie.io/](https://www.balldontlie.io/)  | NBA player data  |
|  [https://github.com/iNaesu/nba-headshot-api](https://github.com/iNaesu/nba-headshot-api)  | Player photos  |
 