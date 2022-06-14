import { createVar, fallbackVar, style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const gridColumnStartVar = createVar();

export const ul = style({
  display: "grid",
  listStyleType: "none",
  gridRowGap: styleVars.unit.up1,
  gridAutoRows: "1fr",
  gridTemplateColumns: "repeat(7, 1fr)",
});

export const li = style({
  gridColumn: `${fallbackVar(gridColumnStartVar, "1")} / span 5`,
});

export const link = style({
  textDecoration: "none",
  minHeight: `calc((${styleVars.unit.def} * 2) + ${styleVars.unit.up2})`,
});

export const box = style({
  alignItems: "center",
  display: "grid",
  gridColumnGap: styleVars.unit.up1,
  gridTemplateColumns: `${styleVars.unit.up2} auto`,
  padding: styleVars.unit.def,
});
