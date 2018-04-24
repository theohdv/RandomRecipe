import * as types from "./types";
import config from "../config/config";

export function fetchRecipes(ingredients) {
  return async function(dispatch, getState) {
    try {
      dispatch(fetchRecipesRequesting());
      const params = ingredients.join(",");
      let response = await fetch(`${config.api_url}?i=${params}`);
      response = await response.json();
      dispatch(fetchRecipesSuccess(response.results));
      return response;
    } catch (e) {
      dispatch(fetchRecipesError());
      throw e;
    }
  };
}

export function fetchRecipesSuccess(recipes) {
  return {
    type: types.FETCH_RECIPES_SUCCESS,
    payload: {
      recipes
    }
  };
}

export function fetchRecipesError() {
  return {
    type: types.FETCH_RECIPES_ERROR
  };
}

export function fetchRecipesRequesting() {
  return {
    type: types.FETCH_RECIPES_REQUESTING
  };
}
