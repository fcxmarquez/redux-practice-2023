import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "@/actions/types";
import { PokemonType } from "@/api";

interface ActionsMap {
  [SET_POKEMONS]: SetPokemonAction;
  [SET_LOADING]: SetLoading;
  [SET_FAVORITE]: {
    payload: number;
    type: typeof SET_FAVORITE;
  };
}

export type SetPokemonAction = {
  type: typeof SET_POKEMONS;
  payload: PokemonType[];
};

export type SetLoading = {
  type: typeof SET_LOADING;
  payload: boolean;
};

export type SetFavorite = {
  type: typeof SET_FAVORITE;
  payload: number;
};

export type Actions = ActionsMap[keyof ActionsMap];
