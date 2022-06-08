import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const footer = style({
  padding: styleVars.unit.up1,
});

export const labelLink = style({
  display: "grid",
  gridAutoColumns: styleVars.unit.up3,
  justifyContent: "end",
});
