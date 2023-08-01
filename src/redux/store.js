import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import credReducer from './reducers';

const rootReducer = combineReducers({credReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
