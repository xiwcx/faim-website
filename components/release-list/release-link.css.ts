import { style, createVar } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const g = createVar();

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
  padding: `${styleVars.unit.down2} ${styleVars.unit.down1}`,
  textDecoration: "none",
  mask: "conic-gradient(from -135deg at top    4px left  4px, #000, #0000 1deg 179deg,#000 180deg) 0    0   /100% 100% no-repeat",
});
