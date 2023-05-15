import { FC } from "react";
import { PokeCard } from "@/components/PokeCard";
import { PokeListContainer } from "./styles";

type PokeListProps = {
  pokemons: unknown[];
};

export const PokeList: FC<PokeListProps> = ({ pokemons }) => {
  return (
    <PokeListContainer>
      {pokemons.map((pokemon: unknown, index) => (
        <PokeCard key={index} />
      ))}
    </PokeListContainer>
  );
};
