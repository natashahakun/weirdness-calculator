import GphApiClient from 'giphy-js-sdk-core';

const giphyClient = GphApiClient('m8nlHA8HZOWMJNBYA6pzp22wmJJ1RYjG');

export const GET_RESULT_REQUEST = 'GET_RESULT_REQUEST';
export const GET_RESULT_SUCCESS = 'GET_RESULT_SUCCESS';
export const GET_RESULT_FAILURE = 'GET_RESULT_FAILURE';

const fetchResult = async (searchTerm) => await giphyClient.translate('gifs', {"s": 'hamburger' });

export const getResult = (searchTerm) => async dispatch => {
	dispatch({ type: GET_RESULT_REQUEST })
	try {
		const result = await fetchResult(searchTerm);
		return dispatch({ 
			type: GET_RESULT_SUCCESS, 
			payload: { 
				title: result.data.title, 
				url: result.data.images.original.url 
			} 
		})
	}
	catch (error) {
		return dispatch({ 
			type: GET_RESULT_FAILURE,
			payload: { error } 
		})
	}
};