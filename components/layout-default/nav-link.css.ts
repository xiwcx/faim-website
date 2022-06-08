import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const navLink = style({
  textDecoration: "none",
  selectors: {
    "& + &": {
      marginInlineStart: styleVars.unit.def,
    },
  },
  verticalAlign: "middle",
});

export const navLinkIcon = style([
  navLink,
  {
    display: "inline-block",
    width: styleVars.unit.def,
  },
]);
