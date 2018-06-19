// (in actions folder)
import cities from '../cities';

export function setCities() {
	return {
		type: 'SET_CITIES',
		payload: cities
	};
}
//I think this one is for the ActiveCity component.
//to do below:
//Make a click event to load the city
export function selectCity(city) {
	return {
		type: 'SELECTED_CITY',
		payload: city
	};
}
