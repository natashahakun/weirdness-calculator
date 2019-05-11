const INITIAL_STATE = {
    term: '',
    weirdness: 0
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'UPDATE_SEARCH_TERM':
			return {
				...state,
				term: action.payload
            }
        case 'UPDATE_WEIRDNESS':
			return {
				...state,
				weirdness: action.payload
        }
		default:
			return state;
	}
 }