import React, { Component } from 'react';
import CitiesArray from '../containers/cities_array'
import CityCard from '../containers/city_card';


class App extends Component {
  	render () {
  		return (
  		<div className="row">
			<CitiesArray />
			<CityCard />
	    	</div>

  			);
  	}
}

export default App;
