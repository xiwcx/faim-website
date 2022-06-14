import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const navLink = style({
  borderBottomStyle: "solid",
  borderBottomWidth: "0.125em",
  borderBottomColor: "transparent",
  textDecoration: "none",
  verticalAlign: "middle",

  selectors: {
    "& + &": {
      marginInlineStart: styleVars.unit.def,
    },
  },
});

export const navLinkActive = style({
  borderBottomColor: styleVars.color.maroon,
});

export const navLinkIcon = style([
  navLink,
  {
    display: "inline-block",
    width: styleVars.unit.def,
  },
]);
