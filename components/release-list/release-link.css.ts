import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const icon = style({
  display: "inline-block",
  marginInlineEnd: styleVars.unit.down1,
  verticalAlign: "middle",
  width: styleVars.unit.def,
});

export const li = style({
  listStyleType: "none",
});

export const link = style({
  backgroundColor: styleVars.color.yellow,
  color: styleVars.color.navy,
  display: "inline-block",
  padding: styleVars.unit.down1,
  textDecoration: "none",
});
