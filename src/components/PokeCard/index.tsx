import Meta from "antd/es/card/Meta";
import { PokeCardContainer } from "./styles";
import { StarOutlined } from "@ant-design/icons";
import { FC } from "react";

type PokeCardProps = {
  name: string;
  imgSrc: string;
  abilities: string;
};

export const PokeCard: FC<PokeCardProps> = ({ name, imgSrc, abilities }) => {
  return (
    <PokeCardContainer
      title={name}
      cover={<img src={imgSrc} alt="Ditto" />}
      extra={<StarOutlined />}
    >
      <Meta description={abilities} />
    </PokeCardContainer>
  );
};
