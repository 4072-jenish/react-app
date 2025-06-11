export const ADD_RECIPES = "ADD_RECIPES";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const SET_LOADING = "SET_LOADING";

export const addRecipe = (recipes) => ({
  type: ADD_RECIPES,
  payload: recipes,
});

export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  payload: id,
});

export const editRecipe = (updatedRecipe) => ({
  type: EDIT_RECIPE,
  payload: updatedRecipe,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});
