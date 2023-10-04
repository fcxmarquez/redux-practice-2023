import { createSlice } from "@reduxjs/toolkit";
import { PokemonsInitialState } from "@/reducers/pokemons";

const initialState: PokemonsInitialState = {
  pokemons: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const pokemonId = action.payload;

      const pokemon = state.pokemons.find((pokemon) => pokemon.id === pokemonId);

      if (pokemon) {
        pokemon.isFavorite = !pokemon.isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
