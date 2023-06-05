import { SET_POKEMONS } from "./types";
import { PokemonPayload, setPokemonAction } from "@/types/action.type";

export interface ActionsMap {
  [SET_POKEMONS]: {
    payload: PokemonPayload;
    type: typeof SET_POKEMONS;
  };
  // Add more action types here
}

export type Actions = ActionsMap[keyof ActionsMap];

// action creator

export const setPokemons = (payload: PokemonPayload): setPokemonAction => ({
  type: SET_POKEMONS,
  payload,
});
