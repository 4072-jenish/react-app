export const ADD_RECIPES = "ADD_RECIPES";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const SET_LOADING = "SET_LOADING";

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const addRecipe = (recipes) => ({
  type: ADD_RECIPES,
  payload: recipes,
});

export const deleteRecipeSuccess = (id) => ({
  type: DELETE_RECIPE,
  payload: id,
});

export const editRecipeSuccess = (updatedRecipe) => ({
  type: EDIT_RECIPE,
  payload: updatedRecipe,
});

export const deleteRecipe = (id) => (dispatch, getState) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    const recipes = getState().recipie.recipes;
    const updatedRecipes = recipes.filter((r) => r.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    dispatch(deleteRecipeSuccess(id));
    dispatch(addRecipe(updatedRecipes));
    dispatch(setLoading(false));
  }, 1000);
};

export const editRecipe = (updatedRecipe) => (dispatch, getState) => {
  dispatch({ type: "EDIT_RECIPE_REQUEST" });

  setTimeout(() => {
    const { recipie } = getState();
    const updatedRecipes = recipie.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );

    saverecipeToStorage(updatedRecipes);

    dispatch({
      type: "EDIT_RECIPE_SUCCESS",
      payload: updatedRecipes,
    });
  }, 100);
};
