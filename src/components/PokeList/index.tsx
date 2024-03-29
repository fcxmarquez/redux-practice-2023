import { FC } from "react";
import { PokeCard } from "@/components/PokeCard";
import { PokeListContainer } from "./styles";
import { PokemonType } from "@/api";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { RootState } from "@/reducers/rootReducer";

type PokeListProps = {
  pokemons: PokemonType[];
};

export const PokeList: FC<PokeListProps> = ({ pokemons }) => {
  const loading = useSelector((state: RootState) => state.ui.loading);

  return (
    <PokeListContainer>
      {loading ? (
        <Spin size="large" className="spinner" />
      ) : (
        pokemons.map((pokemon) => (
          <PokeCard
            name={pokemon.name}
            key={pokemon.name}
            imgSrc={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name).join(", ")}
            id={pokemon.id}
            isFavorite={pokemon.isFavorite}
          />
        ))
      )}
    </PokeListContainer>
  );
};
