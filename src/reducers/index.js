import {combineReducers} from "redux";
import { firebaseReducer } from 'react-redux-firebase'

import testReducer from './testReducer';

const rootReducer = combineReducers({
    testStrings:testReducer,
    firebase: firebaseReducer
});

export default rootReducer;