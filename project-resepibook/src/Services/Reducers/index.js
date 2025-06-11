import { combineReducers } from "redux";
import resepieReducer from "./resepieReducer";

const rootReducer = combineReducers({
  recipie: resepieReducer, 
});

export default rootReducer;
