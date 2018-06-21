import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import CityList from '../containers/city_list';
// import City from '../containers/city';

// import { selectCity } from '../actions';

class ActiveCity extends Component {

	render() {
        const style = {
            width: '100%'
        }

        if(this.props.city === undefined) {
            return (
                <div className="active-city">
                    <p>Click on a city!</p>
                </div>
            )
        }

		// const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`;
        const src = `https://kitt.lewagon.com/placeholder/cities/ + this.props.city.{:slug}}`;
        return (
			<div className="active-city">
				<img src={src} alt="" />
                <h3>{this.props.city.name}</h3>
                <p>{this.props.city.address} </p>
				<h2> fkdæsafjæ</h2>
				<p> </p>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		city: state.activeCity
	};
}


export default connect(null,mapStateToProps)(ActiveCity);
