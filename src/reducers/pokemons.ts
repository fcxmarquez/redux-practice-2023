import { Actions } from "@/actions/action.type";
import { SET_FAVORITE, SET_POKEMONS } from "@/actions/types";
import { PokemonType } from "@/api";
import { fromJS } from "immutable";

export type PokemonsInitialState = {
  pokemons: PokemonType[];
  searchedPokemons: PokemonType[];
};

export const initialState = fromJS({
  // Immutable is not recommended actually
  pokemons: [],
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

    default:
      return state;
  }
};
