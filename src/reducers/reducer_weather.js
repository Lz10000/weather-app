import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  //take current list of cities and add this new city to it
  switch(action.type){
    case FETCH_WEATHER:
      //es6 syntax same as below
      return [action.payload.data, ...state ]; //{city, city, city } NOT [city, {city, city}]

      //not mutating state
      //return state.concat{ [action.payload.data] }; //concat doesn't change existing array, creates new array that contains old stuff and new stuff

      //return state.push{action.spayload.data} don't do this, do not update state directly in redux (in addition to components)
  }
  return state;
}
