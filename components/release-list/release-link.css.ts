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

export const href = style({
  textDecoration: "none",
});

export const link = style({
  display: "inline-grid",
  gridTemplateColumns: "auto 1fr",
  padding: `${styleVars.unit.down2} ${styleVars.unit.down1}`,
});
