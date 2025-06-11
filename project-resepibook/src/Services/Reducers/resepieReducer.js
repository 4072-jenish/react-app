import {
  ADD_RECIPES,
  DELETE_RECIPE,
  EDIT_RECIPE,
  SET_LOADING,
} from "../Actions/recipieActions";
import { setResepie } from "../storage"; 

const initialState = {
  recipes: [],
  loading: false,
};

const recipieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return { ...state, recipes: action.payload };

    case DELETE_RECIPE:
      const afterDelete = state.recipes.filter((r) => r.id !== action.payload);
      setResepie(afterDelete);
      return { ...state, recipes: afterDelete };

      case EDIT_RECIPE:
        const updated = state.recipes.map((r) =>
          r.id === action.payload.id ? action.payload : r
        );
        setResepie(updated); 
        return { ...state, recipes: updated };
      

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default recipieReducer;
