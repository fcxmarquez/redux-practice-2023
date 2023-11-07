import Meta from "antd/es/card/Meta";
import { PokeCardContainer } from "./styles";
import { FC } from "react";
import { StarButton } from "@/components/StarButton";
import { useAppDispatch } from "@/main";
import { setFavorite } from "@/slices/dataSlice";

type PokeCardProps = {
  name: string;
  imgSrc: string;
  types: string;
  id: number;
  isFavorite: boolean;
};

export const PokeCard: FC<PokeCardProps> = ({ name, imgSrc, types, id, isFavorite }) => {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite(id));
  };

  return (
    <PokeCardContainer
      title={name}
      cover={<img src={imgSrc} alt="Ditto" />}
      extra={<StarButton isFavorite={isFavorite} onClick={handleFavorite} />}
    >
      <Meta description={types} />
    </PokeCardContainer>
  );
};
