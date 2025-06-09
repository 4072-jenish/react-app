import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk';
import recipieReducer from "./Services/Reducers/resepieReducer";

const rootReducer = combineReducers({
  recipie: recipieReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
