import axios from "axios";
import { Sprites, TypeElement, abilities } from "./pokemon.type";

export type PokemonType = {
  name: string;
  url: string;
  sprites: Sprites;
  abilities: abilities[];
  types: TypeElement[];
  id: number;
  isFavorite: boolean;
};

export const getPokemon = (): Promise<PokemonType[]> => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

export const getPokemonDetails = (pokemon: PokemonType) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
