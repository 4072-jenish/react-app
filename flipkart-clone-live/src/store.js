// store.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./Service/Reducers/productReducer";
import cartReducer from "./Service/Reducers/cartReducer";


const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const initialState = {
  cart: savedCart,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState, 
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
});

export default store;
