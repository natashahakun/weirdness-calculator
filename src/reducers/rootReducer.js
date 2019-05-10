import { combineReducers } from 'redux';
import liked from './liked.reducer';
import result from './result.reducer';
import search from './search.reducer';

export default combineReducers({
    liked,
    result,
    search
});