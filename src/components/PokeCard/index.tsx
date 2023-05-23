import Meta from "antd/es/card/Meta";
import { PokeCardContainer } from "./styles";
import { StarOutlined } from "@ant-design/icons";

export const PokeCard = ({ name }: { name: string }) => {
  return (
    <PokeCardContainer
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </PokeCardContainer>
  );
};
