import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const footer = style({
  // paddingBlockStart: styleVars.unit.up1,
});

export const labelLink = style({
  display: "grid",
  gridAutoColumns: styleVars.unit.up2,
  justifyContent: "end",
});
