import Meta from "antd/es/card/Meta";
import { PokeCardContainer } from "./styles";
import { StarOutlined } from "@ant-design/icons";

export const PokeCard = () => {
  return (
    <PokeCardContainer
      title="Ditto"
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
