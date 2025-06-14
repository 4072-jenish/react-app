import { createStoreHook } from "react-redux";
import ProductReducer from "./Service/Reducers/reducerProduct";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./Service/Reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
