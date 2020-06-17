import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const NotificationIconComponent = (props) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="#4775f2" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14V9c0-3.07-1.64-5.64-4.5-6.32V2c0-.83-.68-1.5-1.51-1.5S8.5 1.17 8.5 2v.68C5.63 3.36 4 5.92 4 9v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L16 14zm-6.01 6c1.1 0 2-.9 2-2h-4a2 2 0 002 2zM4.77 2.73c.42-.38.43-1.03.03-1.43a1 1 0 00-1.39-.02A10.424 10.424 0 00.14 7.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83a8.44 8.44 0 012.65-4.94zM16.6 1.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05z"
        fill="#4775f2"
      />
    </Svg>
  );
};
