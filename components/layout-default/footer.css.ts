import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const footer = style({
  backgroundColor: styleVars.color.navy,
});

export const iconSafeInside = style({
  fill: styleVars.color.navy,
});
