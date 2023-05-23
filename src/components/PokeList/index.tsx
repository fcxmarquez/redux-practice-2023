import { FC } from "react";
import { PokeCard } from "@/components/PokeCard";
import { PokeListContainer } from "./styles";
import { PokemonType } from "@/api";

type PokeListProps = {
  pokemons: PokemonType[];
};

export const PokeList: FC<PokeListProps> = ({ pokemons }) => {
  return (
    <PokeListContainer>
      {pokemons.map((pokemon) => (
        <PokeCard name={pokemon.name} key={pokemon.name} />
      ))}
    </PokeListContainer>
  );
};
