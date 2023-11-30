import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonsInitialState } from "@/reducers/pokemons";
import { getPokemon, getPokemonDetails } from "@/api";
import { setLoading } from "@/slices/uiSlice";

const initialState: PokemonsInitialState = {
  pokemons: [],
  searchedPokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
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
    searchPokemon: (state, action) => {
      state.searchedPokemons = [];

      const searchValue = action.payload;

      if (searchValue) {
        const searchedPokemons = state.pokemons.filter((pokemon) =>
          pokemon.name.includes(searchValue)
        );
        state.searchedPokemons = searchedPokemons;
      } else {
        state.searchedPokemons = [];
      }
    },
    resetSearch: (state) => {
      state.searchedPokemons = [];
    },
  },
});

export const { setPokemons, setFavorite, searchPokemon, resetSearch } = dataSlice.actions;

export default dataSlice.reducer;
