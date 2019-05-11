import { getResult } from './result.actions';

const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
const UPDATE_WEIRDNESS = 'UPDATE_WEIRDNESS';

export const updateSearchTerm = (term) => dispatch => {
    dispatch({ type: UPDATE_SEARCH_TERM, payload: term });
}

export const updateWeirdness = (weirdness) => dispatch => {
    dispatch({ type: UPDATE_WEIRDNESS, payload: parseInt(weirdness)});
    dispatch(getResult());
}
