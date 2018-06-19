import React, { Component } from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { selectCity } from '../actions';

class ActiveCity extends Component {
	componentWillMount() {
		this.props.selectCity(city);
	}

	render() {
		const src = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;
		return (
			<div className="active-city">
				<img src={src} alt="" />
				<h2> fkdæsafjæ</h2>
				<p> </p>
			</div>
			);
	}
}



function mapStateToProps(state) {
	return {
		city: state.city
	};
}


export default connect(mapStateToProps)(ActiveCity);
