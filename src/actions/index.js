// TODO: add and export your own actions
import cities from '../cities';

export function setCities () {
	//our fake db here
	return {
		type: 'SET_CITIES',
		payload: cities
	};
}
