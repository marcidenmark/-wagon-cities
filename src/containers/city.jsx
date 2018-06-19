import React, { Component } from 'react';
// import CityList from '../containers/city_list';
//this was NOT needed.
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions'


class City extends Component {
	handleClick = () => {
		this.props.selectCity(this.props.city);
	}

	render () {
		return (
			<div className="cities">
				<li>	{this.props.city.name}
				</li>
			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ setCities: setCities } ,
		dispatch
		);
}

 function mapStateToProps(State) {
	return {
		selectedCity: State.selectedCity
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(City);
