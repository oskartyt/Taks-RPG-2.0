import {createStore, applyMiddleware, compose} from 'redux';
import {GNotAllowedMiddleware} from './middleware'

import rootReducer from '../reducers'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(GNotAllowedMiddleware))
);

export default store