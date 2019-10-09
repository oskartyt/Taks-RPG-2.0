import {combineReducers} from "redux";

import testReducer from './testReducer';

const rootReducer = combineReducers({testStrings:testReducer});

export default rootReducer;