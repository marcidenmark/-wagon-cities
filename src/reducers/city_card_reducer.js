export default function(state, action) {
	if (state === undefined) {
		return null;
	}
	// debugger
	if (action.type === 'SELECT_CITY') {
		return action.payload;
	} else {
		return state;
	}
}
