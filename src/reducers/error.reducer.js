const INITIAL_STATE = {
    message: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'UPDATE_ERROR':
			return {
				...state,
				message: action.payload
            }
		default:
			return state;
	}
 }