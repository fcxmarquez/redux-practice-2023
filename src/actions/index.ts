import { PokemonType } from "@/api";
import { SET_POKEMONS } from "./types";
import { setPokemonAction } from "@/types/action.type";

export interface ActionsMap {
  [SET_POKEMONS]: {
    payload: PokemonType[];
    type: typeof SET_POKEMONS;
  };
  // Add more action types here
}

export type Actions = ActionsMap[keyof ActionsMap];

// action creator

export const setPokemons = (payload: PokemonType[]): setPokemonAction => ({
  type: SET_POKEMONS,
  payload,
});
