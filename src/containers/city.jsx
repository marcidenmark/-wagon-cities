import React, { Component } from 'react';
// import CityList from '../containers/city_list';
//this was NOT needed.


class City extends Component {

	render () {
		return (
			<div className="cities">
				<h2>	{this.props.city.name}
				</h2>
			</div>
			)
	}
}
export default City;
