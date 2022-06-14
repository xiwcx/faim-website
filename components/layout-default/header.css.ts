import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const header = style({
  // padding: styleVars.unit.def,
});

export const headerMedium = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
});

export const siteTitleLink = style({
  textDecoration: "none",
});
