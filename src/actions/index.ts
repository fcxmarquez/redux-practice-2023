import { PokemonType, getPokemonDetails } from "@/api";
import { SET_POKEMONS } from "./types";
import { setPokemonAction } from "@/types/action.type";
import { Dispatch } from "redux";

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

export const getPokemonsWithDetails =
  (pokemons: PokemonType[]) => async (dispatch: Dispatch) => {
    const pokemonsWithDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsWithDetails));
  };
