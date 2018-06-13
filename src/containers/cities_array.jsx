import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CityCard from '../containers/city';
import { setCities } from '../actions';


class CitiesArray extends Component {
	componentWillMount() {
		this.props.setCities();
	}
	render() {
		return (
			<div className="list-group-item col-sm-4">
				{this.props.cities.map((city, index) => {
					return <CityCard city={city} key ={city.name} />;
				})}
			</div>
			);
	}
}
// dispatch argumment to triggger action
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
    		{ setCities: setCities },
    		dispatch
    		);
	}
// below mapping Redux state to the store
// Here we are returning the updated cities
function mapReduxStateToProps(reduxState) {
	return {
		cities: reduxState.cities
	};
}

export default connect(mapDispatchToProps, mapReduxStateToProps) (CitiesArray) ;
