import React, { Component } from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class ActiveCity extends Component {
	componentWillMount() {
		this.props.selectCity();
	}

	render() {
		return (
			<div className="active-city">
			<h2> fkdæsafjæ</h2>

			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ selectCity: selectCity },
		dispatch
		);
}

function mapReduxStateToProps(reduxState) {
	return {
		city: reduxState.city
	};
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(ActiveCity);
