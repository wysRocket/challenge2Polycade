import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import machinesReducer from "./machines-reducer";

let reducers = combineReducers ({
    form: formReducer,
    machines: machinesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;