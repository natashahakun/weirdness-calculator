const INITIAL_STATE = {
	title: '',
	url: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_RESULT_REQUEST':
			return {
				...state,
				loading: true
			}
		case 'GET_RESULT_SUCCESS':
			return {
				...state,
				loading: false,
				...action.payload
			}
		case 'GET_RESULT_FAILURE':
			return {
				...state,
				loading: false,
				...action.payload
            }
        case 'CLEAR_RESULT':
            return {
                ...INITIAL_STATE
            }
		default:
			return state;
	}
 }