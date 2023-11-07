import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonsInitialState } from "@/reducers/pokemons";
import { getPokemon, getPokemonDetails } from "@/api";
import { setLoading } from "@/slices/uiSlice";

const initialState: PokemonsInitialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    // Use the set loading here
    dispatch(setLoading(true));
    const data = await getPokemon();
    const pokemonsWithDetails = await Promise.all(
      data.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsWithDetails));
    dispatch(setLoading(false));
  }
);

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
