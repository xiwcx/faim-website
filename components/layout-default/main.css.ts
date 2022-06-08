import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const main = style({
  paddingBlockEnd: styleVars.unit.up1,
  paddingBlockStart: styleVars.unit.up1,
});

export const content = style({
  margin: `${styleVars.unit.up1} auto`,
  maxWidth: "36em",
});
