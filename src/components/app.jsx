import React, { Component } from 'react';
import CityList from '../containers/city_list';


class App extends Component {
	render () {
		return (
			<div className="row">
				<CityList />
			</div>)
	}

}

export default App;
