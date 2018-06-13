import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CityCard extends Component {
	render () {
		return (
			<div className="active-city">
				<h2>
					{this.props.cities.name}
				</h2>
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

function mapStateToProps(State) {
	return {
		selectCity: City.selectedCity
	};
}

export default connect (mapDispatchToProps, mapStateToProps) (CityCard);
