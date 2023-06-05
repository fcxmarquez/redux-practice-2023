import { SET_POKEMONS } from "@/actions/types";
import { PokemonType } from "@/api";

export type PokemonPayload = {
  pokemons: PokemonType[];
};

export type setPokemonAction = {
  type: typeof SET_POKEMONS;
  payload: PokemonPayload;
};
