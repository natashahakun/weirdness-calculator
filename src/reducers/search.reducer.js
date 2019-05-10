const INITIAL_STATE = {
	term: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'UPDATE_SEARCH_TERM':
			return {
				...state,
				term: action.payload
			}
		default:
			return state;
	}
 }