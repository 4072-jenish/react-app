import { ADD_RECIPES, DELETE_RECIPE, EDIT_RECIPE, SET_LOADING } from "../Actions/recipieActions";
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
      const updatedAfterDelete = state.recipes.filter((r) => r.id !== action.payload);
      setResepie(updatedAfterDelete);
      return { ...state, recipes: updatedAfterDelete };

    case EDIT_RECIPE:
      const updatedRecipes = state.recipes.map((r) =>
        r.id === action.payload.id ? action.payload : r
      );
      setResepie(updatedRecipes);
      return { ...state, recipes: updatedRecipes };
      
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      
      return state;
  }
};

export default recipieReducer;
