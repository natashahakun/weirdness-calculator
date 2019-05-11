import GphApiClient from 'giphy-js-sdk-core';

const giphyClient = GphApiClient('m8nlHA8HZOWMJNBYA6pzp22wmJJ1RYjG');

export const GET_RESULT_REQUEST = 'GET_RESULT_REQUEST';
export const GET_RESULT_SUCCESS = 'GET_RESULT_SUCCESS';
export const GET_RESULT_FAILURE = 'GET_RESULT_FAILURE';

export const CLEAR_RESULT = 'CLEAR_RESULT';

const fetchResult = async (searchTerm, weirdness) => await giphyClient.translate('gifs', {"s": searchTerm, weirdness });

export const getResult = () => async (dispatch, getState) => {
    const { search } = getState();

	dispatch({ type: GET_RESULT_REQUEST });
	try {
        const result = await fetchResult(search.term, search.weirdness);

		return dispatch({ 
			type: GET_RESULT_SUCCESS, 
			payload: { 
				title: result.data.title,
                url: result.data.images.original.url
			} 
		});
	}
	catch (error) {
		return dispatch({ 
			type: GET_RESULT_FAILURE,
			payload: { error } 
		});
	}
};

export const clearResult = () => dispatch => {
    dispatch({ type: CLEAR_RESULT });
}