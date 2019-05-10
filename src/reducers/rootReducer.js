import { combineReducers } from 'redux';
import liked from './liked.reducer';
import result from './result.reducer';

export default combineReducers({
    liked,
	result
});