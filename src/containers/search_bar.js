import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

constructor(props){
  super(props);

  this.state = {term: ''};

  //have to do this when you reference *this* with a function/callback
  //do this instead of using a big arrow function
  this.onInputChange = this.onInputChange.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChange(event){
  this.setState({term: event.target.value });
}

onFormSubmit(event){
  //tell browser not to submit the form/ make a post request
  event.preventDefault();

  //we need to go fetch weather data
  this.props.fetchWeather(this.state.term);
  //clearing the input with empty string 
  this.setState({term: ''});
}
//turn this into a controlled field: a form element where value of input is set by state of component
//component level state is not the same as redux level state
//before we wrapped onChange inside a fat arrow function but if we just pass it like this, the value of "this" is not react component, it's a mystery context
  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Get a five-day forecast in your favorite cities"
        className = "form-control"
        value={this.state.term}
        onChange={this.onInputChange}/>
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
      </form>
    );
  }
}
//hook up fetchweather action with search bar using this function
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//passing null here instead of state just means we don't care about the state right now
//just want to pass mapDispatchToProps (which is the second argument)
export default connect(null, mapDispatchToProps)(SearchBar);
