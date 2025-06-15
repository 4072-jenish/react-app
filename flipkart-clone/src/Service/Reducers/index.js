import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filters: filterReducer
});

export default rootReducer;
