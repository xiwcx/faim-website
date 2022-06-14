import { styleVars } from "../../utils/styles/index.css";
import { IconProps } from "./icon";

export const IconYoutubeMusic = ({ fill = "navy" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={styleVars.color[fill]}
  >
    <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 15.9c-3.3 0-5.9-2.6-5.9-5.9S6.7 4.1 10 4.1s5.9 2.6 5.9 5.9-2.6 5.9-5.9 5.9z" />
    <path d="M10 4.8c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2-2.3-5.2-5.2-5.2zm-1.9 8.1V7.1l5.1 2.9-5.1 2.9z" />
  </svg>
);
