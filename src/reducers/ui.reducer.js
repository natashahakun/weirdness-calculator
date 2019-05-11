const INITIAL_STATE = {
    error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload
            }
		default:
			return state;
	}
 }