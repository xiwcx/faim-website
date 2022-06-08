import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const main = style({
  padding: `${styleVars.unit.up1} ${styleVars.unit.def}`,
});

export const content = style({
  margin: "0 auto",
  maxWidth: "36em",
});
