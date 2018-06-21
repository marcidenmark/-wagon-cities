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
			<div className="list-group-item" onClick={this.handleClick} >
				<li>	{this.props.city.name}
				</li>
			</div>
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

export default connect(mapDispatchToProps)(City);
