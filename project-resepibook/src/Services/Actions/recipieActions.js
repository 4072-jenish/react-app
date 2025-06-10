import { setResepie } from "../storage";

export const ADD_RECIPES = "ADD_RECIPES";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const SET_LOADING = "SET_LOADING";

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const addRecipe = (recipes) => {
  setResepie(recipes);
  return {
    type: ADD_RECIPES,
    payload: recipes,
  };
};

export const deleteRecipe = (id) => (dispatch, getState) => {
  dispatch(setLoading(true));

  setTimeout(() => {
    const recipes = getState().recipie.recipes;
    const updatedRecipes = recipes.filter((r) => r.id !== id);

    setResepie(updatedRecipes);

    dispatch({
      type: DELETE_RECIPE,
      payload: id,
    });

    dispatch({
      type: ADD_RECIPES,
      payload: updatedRecipes,
    });

    dispatch(setLoading(false));
  }, 1000);
};


export const editRecipe = (updatedRecipe) => {
  return {
    type: EDIT_RECIPE,
    payload: updatedRecipe,
  };
};

