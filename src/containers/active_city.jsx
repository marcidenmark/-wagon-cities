import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import CityList from '../containers/city_list';
// import City from '../containers/city';

// import { selectCity } from '../actions';

class ActiveCity extends Component {

	render() {


        if(this.props.city === null) {
            return (
                <div className="active-city">
                    <p>Click on a city!</p>
                </div>
            )
        }

		const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`;
        return (
			<div className="active-city">
                <h3>{this.props.city.name}</h3>
                <p>{this.props.city.address} </p>
				<img src={src} width="100%" alt="" />

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
