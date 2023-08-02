import { PokemonType, getPokemonDetails } from "@/api";
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";
import { Dispatch } from "redux";

// action creator

export const setPokemons = (payload: PokemonType[]) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload: number) => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons: PokemonType[]) => async (dispatch: Dispatch) => {
    const pokemonsWithDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsWithDetails));
  };
