import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 24" {...props}>
      <path d="M9.99998 19V14H14V19C14 9.99998 19Z" />
    </Svg>
  );
};

export default Icon;
