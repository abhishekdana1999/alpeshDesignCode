import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const CloseIcon = (props) => {
  return (
    <Svg width={512} height={512} viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="blue"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M368 368L144 144M368 144L144 368"
      />
    </Svg>
  );
};
