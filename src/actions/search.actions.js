const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export const updateSearchTerm = (term) => dispatch => {
  dispatch({ type: UPDATE_SEARCH_TERM, payload: term });
}
