import { FC } from "react";
import { StarButtonContainer } from "./styles";
import { ButtonProps } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

type StarButtonProps = {
  isFavorite: boolean;
} & ButtonProps;

export const StarButton: FC<StarButtonProps> = (props) => {
  const { isFavorite, ...restProps } = props;
  const Icon = isFavorite ? <StarFilled /> : <StarOutlined />;

  return <StarButtonContainer icon={Icon} {...restProps}></StarButtonContainer>;
};
