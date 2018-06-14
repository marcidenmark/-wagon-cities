import React, { Component } from 'react';
// import CityList from '../containers/city_list';
//this was NOT needed.


class City extends Component {

	render () {
		return (
			<div className="cities">
				<li>	{this.props.city.name}
				</li>
			</div>
			)
	}
}
export default City;
