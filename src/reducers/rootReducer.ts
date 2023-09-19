import { combineReducers } from "redux-immutable";
import { pokemonsReducer, PokemonsInitialState } from "@/reducers/pokemons";
import { uiReducer, UiInitialState } from "@/reducers/ui";
import { Map } from "immutable";

export type CombinedInitialState = {
  data: PokemonsInitialState;
  ui: UiInitialState;
};

export const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RootState = Map<string, any>;
