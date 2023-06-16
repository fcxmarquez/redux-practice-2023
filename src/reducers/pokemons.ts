import { Actions } from "@/actions";
import { SET_POKEMONS } from "@/actions/types";
import { PokemonType } from "@/api";

export type initialStateType = {
  pokemons: PokemonType[];
};

export const initialState: initialStateType = {
  pokemons: [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};

export const pokemonsReducer = (
  state = initialState,
  action: Actions
): typeof initialState => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
};
