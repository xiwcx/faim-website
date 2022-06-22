import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const container = style({
  alignItems: "center",
  display: "grid",
  height: "75vh",
  justifyItems: "center",
});

export const loader = style({
  width: styleVars.unit.up1,
});
