import { Actions } from "@/actions";
import { SET_LOADING, SET_POKEMONS } from "@/actions/types";
import { PokemonType } from "@/api";

export type initialStateType = {
  pokemons: PokemonType[];
  loading: boolean;
};

export const initialState: initialStateType = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (
  state = initialState,
  action: Actions
): typeof initialState => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
