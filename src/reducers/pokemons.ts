import { Actions } from "@/types/action.type";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "@/actions/types";
import { PokemonType } from "@/api";
import { fromJS } from "immutable";

export type initialStateType = {
  pokemons: PokemonType[];
  loading: boolean;
};

export const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (
  state = initialState,
  action: Actions
): typeof initialState => {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(["pokemons"], fromJS(action.payload));

    case SET_FAVORITE:
      const pokemonId = action.payload;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return state.updateIn(["pokemons"], (pokemons: any) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pokemons.map((pokemon: any) =>
          pokemon.get("id") === pokemonId
            ? pokemon.update("isFavorite", (isFavorite: boolean) => !isFavorite)
            : pokemon
        )
      );

    case SET_LOADING:
      return state.setIn(["loading"], action.payload);

    default:
      return state;
  }
};
