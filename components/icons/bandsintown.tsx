import { styleVars } from "../../utils/styles/index.css";
import { IconProps } from "./icon";

export const IconBandsintown = ({ width = "2em" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width={width}>
      <circle cx="250" cy="250" r="250" fill={styleVars.color.white} />
      <path
        fill={styleVars.color.navy}
        d="M189.66 172.41h51.72v68.97h-51.72zm68.96 0h51.72v68.97h-51.72zm68.97-51.72h51.72v120.69h-51.72z"
      />
      <path
        fill={styleVars.color.navy}
        d="M189.66 258.62v51.73h137.93v17.24H172.41v-206.9h-51.72v258.62h258.62V258.62H189.66z"
      />
    </svg>
  );
};
