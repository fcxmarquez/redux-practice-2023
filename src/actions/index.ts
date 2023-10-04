import { PokemonType, getPokemonDetails } from "@/api";
import { SET_FAVORITE } from "./types";
import { Dispatch } from "redux";
import { setPokemons } from "@/slices/dataSlice";

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
