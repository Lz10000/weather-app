import axios from 'axios';

const API_KEY = '05189d8d22a1f8f8010d4ec8b3dc61c5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//make it into a const to keep action types consistent with our action creators and reducers
//remove mistakes from copying strings all over the place
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`

  //make a get request on this url, returns a promise
  //request is asynchronous
  const request = axios.get(url);
  //don't need full library like jQuery, just make a simple ajax request with axios

  console.log('Request: ', request);
  //promise doesn't actually contain our data

  return{
    //always need a type
    type: FETCH_WEATHER,
    //optional property that comes with actions
    payload: request
    //we're returning the promise as a payload

    //redux promise sees this as a promise and stops it entirely, waits till promise resolves then send that as reducer to payload
  };
}
