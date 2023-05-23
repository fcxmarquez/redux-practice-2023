import axios from "axios";

export type PokemonType = {
  name: string;
  url: string;
};

export const getPokemon = (): Promise<PokemonType[]> => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};
