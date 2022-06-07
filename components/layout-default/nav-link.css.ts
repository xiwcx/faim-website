import { style } from "@vanilla-extract/css";

export const navLink = style({
  textDecoration: "none",
  selectors: {
    "& + &": {
      marginInlineStart: "1rem",
    },
  },
});
