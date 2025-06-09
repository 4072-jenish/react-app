import { createStore } from "redux";
import rootReducer from "./Services/Reducers/index";
import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

const compresEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose ;
const store =  createStore( rootReducer , compresEnhancers(applyMiddleware(thunk)));

export default store;
