import { Actions } from "@/actions";
import { SET_POKEMONS } from "@/actions/types";

export const initialState = {
  pokemons: [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

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
