import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

const ul = style({
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

export const pageTitle = style({
  paddingBlockEnd: styleVars.unit.def,
  textAlign: "center",
});

export const linkList = style([
  ul,
  {
    display: "grid",
    gridGap: styleVars.unit.up1,
    maxWidth: "20em",
    margin: "0 auto",
  },
]);

export const linkCategoryList = style([
  ul,
  {
    display: "grid",
    gridGap: styleVars.unit.def,
  },
]);

export const link = style({
  textDecoration: "none",
});

export const linkSpan = style({
  display: "block",
  padding: styleVars.unit.def,
});

export const title = style({
  marginBlockEnd: styleVars.unit.down1,
  textAlign: "center",
});
