import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
//import ajaxCallsInProgress from './ajaxCallsInProgress';


const rootReducer = combineReducers({
    courses,
    authors
});


export default rootReducer;