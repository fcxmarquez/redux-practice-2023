import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export const PokeCard = () => {
  return (
    <Card title="Ditto" cover={<img src="" alt="Ditto" />}>
      <Meta description="fire, magic" />
    </Card>
  );
};
