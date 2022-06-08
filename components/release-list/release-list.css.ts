import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const releaseList = style({
  display: "grid",
  gridGap: styleVars.unit.up2,
});
