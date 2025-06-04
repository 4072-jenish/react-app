import { combineReducers } from "redux";
import bookReducer from "./booksReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
   bookReducer,
   counterReducer
});

export default rootReducer;