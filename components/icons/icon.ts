import { styleVars } from "../../utils/styles/index.css";

export type IconProps = {
  fill?: keyof typeof styleVars.color;
  width?: string;
};
