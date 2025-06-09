import {
  ADD_RECIPES,
  DELETE_RECIPE,
  EDIT_RECIPE,
  SET_LOADING,
} from "../Actions/recipieActions";

const initialState = {
  recipes: [],
  loading: false,
};

const recipieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return { ...state, recipes: action.payload };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((r) => r.id !== action.payload),
      };
case "EDIT_RECIPE_REQUEST":
  return {
    ...state,
    loading: true,
  };

case "EDIT_RECIPE_SUCCESS":
  return {
    ...state,
    recipes: action.payload,
    loading: false,
  };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default recipieReducer;
