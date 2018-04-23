import { createReducer } from "../helpers/reducer-helper";
import * as types from "../actions/types";

export const initial_state = {
  list: [],
  is_requesting: false
};

export const recipes = createReducer(initial_state, {
  [types.FETCH_RECIPES_SUCCESS](state, action) {
    return { list: action.payload.recipes, is_requesting: false };
  },
  [types.FETCH_RECIPES_ERROR](state, action) {
    return { list: [...state.list], is_requesting: false };
  },
  [types.FETCH_RECIPES_REQUESTING](state, action) {
    return { list: [...state.list], is_requesting: true };
  }
});
