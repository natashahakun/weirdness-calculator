const ADD_LIKED = 'ADD_LIKED';
const REMOVE_LIKED = 'REMOVE_LIKED';

export const addLiked = (result) => dispatch => {
  dispatch({ type: ADD_LIKED, payload: result })
}

export const removeLiked = (result) => dispatch => {
    dispatch({ type: REMOVE_LIKED, payload: result })
}
