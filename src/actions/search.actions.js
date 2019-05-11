import { getResult } from './result.actions';

const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
const SET_WEIRDNESS = 'SET_WEIRDNESS';

export const setSearchTerm = (term) => dispatch => {
    dispatch({ type: SET_SEARCH_TERM, payload: term });
}

export const setWeirdness = (weirdness) => dispatch => {
    dispatch({ type: SET_WEIRDNESS, payload: parseInt(weirdness)});
    dispatch(getResult());
}
