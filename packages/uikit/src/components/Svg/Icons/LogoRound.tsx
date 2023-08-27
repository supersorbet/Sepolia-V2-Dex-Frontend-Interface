import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <circle cx={48} cy={48} r={48} fill="url(#paint0_linear_10493)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.858 6.275h-.047z"
        fill="#000000"
      />
      <path
        d="M36.573 0-1.06-7.369-17.254z"
        fill="#000000"
      />
      <path
        d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
        fill="#FEDC90"
      />
      <path
        d="M40.592 4.73z"
        fill="#000000"
      />
      <defs>
        <linearGradient id="paint0_linear_10493" x1={48} y1={0} x2={48} y2={96} gradientUnits="userSpaceOnUse">
          <stop stopColor="#000000" />
          <stop offset={1} stopColor="#1FC7D4" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
