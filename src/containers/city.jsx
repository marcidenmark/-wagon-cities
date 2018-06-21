import React, { Component } from 'react';
// import CityList from '../containers/city_list';
//this was NOT needed.
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions'


class City extends Component {
	handleClick = (event) => {
		this.props.selectCity(this.props.city);
	}

	render () {
		return (
            <li
            className="list-group-item"
            onClick={this.handleClick}>{this.props.city.name}

			</li>
			)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ selectCity: selectCity } ,
		dispatch
		);
}

//  function mapStateToProps(State) {
// 	return {
// 		selectedCity: State.selectedCity
// 	};
// }

export default connect(null, mapDispatchToProps)(City);
