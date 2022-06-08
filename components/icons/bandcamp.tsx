import { styleVars } from "../../utils/styles/index.css";
import { IconProps } from "./icon";

export const IconBandcap = ({ fill = "navy" }: IconProps) => {
  const color = styleVars.color[fill];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 514">
      <defs>
        <clipPath>
          <path fill="none" d="M1 1h512v512H1z"></path>
        </clipPath>
        <clipPath id="clip-path-2">
          <path d="M257 513c141.38 0 256-114.62 256-256S398.38 1 257 1 1 115.62 1 257s114.62 256 256 256zm0 0"></path>
        </clipPath>
        <clipPath id="clip-path-4">
          <path
            fill="none"
            d="M1-279h612v792H1z"
            clipPath="url(#clip-path-2)"
          ></path>
        </clipPath>
        <clipPath id="clip-path-5">
          <path d="M306.78 337.5H120l87.22-161H394l-87.22 161"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path-4)">
        <path
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M257 513c141.38 0 256-114.62 256-256S398.38 1 257 1 1 115.62 1 257s114.62 256 256 256zm0 0"
        ></path>
      </g>
      <path
        d="M115 171.49h284.01V342.5H115z"
        clipPath="url(#clip-path-5)"
      ></path>
    </svg>
  );
};
