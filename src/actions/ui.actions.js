const SET_ERROR = 'SET_ERROR';

export const setError = (error) => dispatch => {
    dispatch({ type: SET_ERROR, payload: error })
    setTimeout(() => dispatch({ type: SET_ERROR, payload: '' }), 5000)
}