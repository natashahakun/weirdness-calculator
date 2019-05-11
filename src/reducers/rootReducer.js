import { combineReducers } from 'redux';
import error from './error.reducer';
import liked from './liked.reducer';
import result from './result.reducer';
import search from './search.reducer';

export default combineReducers({
    error,
    liked,
    result,
    search
});