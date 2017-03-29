import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        // add any middleware uses in the application using applyMiddleware
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}