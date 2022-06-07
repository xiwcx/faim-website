import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const header = style({
  backgroundColor: styleVars.color.navy,
  textAlign: "center",
  borderBlockEndWidth: "4px",
  borderBlockEndColor: styleVars.color.maroon,
  borderBlockEndStyle: "solid",
  padding: "1rem",
});

export const siteTitleLink = style({
  textDecoration: "none",
});
