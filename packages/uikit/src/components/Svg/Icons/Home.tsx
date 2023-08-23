import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M64.8,64.8c-2.4,3.2-6.4,5.6-11.2,5.6s-8.8-2.4-11.2-5.6 c-5.6-7.2-5.6-16.8,0-24s10.4-5.6,16-5.6s10.4,2.4,16,5.6C70.4,48,70.4,57.6,64.8,64.8z M45.6,32c-2.4-3.2-6.4-5.6-11.2-5.6 s-8.8,2.4-11.2,5.6c-5.6,7.2-5.6,16.8,0,24s10.4,5.6,16,5.6s10.4-2.4,16-5.6C51.2,48.8,51.2,39.2,45.6,32z" />
    </Svg>
  );
};

export default Icon;
