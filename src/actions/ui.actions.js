const UPDATE_ERROR = 'UPDATE_ERROR';

export const updateError = (error) => dispatch => {
    dispatch({ type: UPDATE_ERROR, payload: error })
    setTimeout(() => dispatch({ type: UPDATE_ERROR, payload: '' }), 5000)
}