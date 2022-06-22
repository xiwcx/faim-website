import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

const borders = style({
  borderBlockEndColor: styleVars.color.maroon,
  borderBlockEndStyle: "solid",
  borderBlockEndWidth: styleVars.unit.down2,
  borderBlockStartColor: styleVars.color.maroon,
  borderBlockStartStyle: "solid",
  borderBlockStartWidth: styleVars.unit.down2,
});

export const ul = style([
  {
    display: "grid",
    listStyleType: "none",
    paddingBlockEnd: styleVars.unit.def,
    paddingBlockStart: styleVars.unit.def,
    paddingInlineStart: 0,
  },
  borders,
]);

export const item = style({
  display: "grid",
  gridTemplateColumns: "1fr auto",

  selectors: {
    "& + &": {
      borderBlockStartColor: styleVars.color.maroon,
      borderBlockStartStyle: "solid",
      borderBlockStartWidth: styleVars.unit.down2,
      marginBlockStart: styleVars.unit.def,
      paddingBlockStart: styleVars.unit.def,
    },
  },
});

export const link = style({
  paddingBlockEnd: styleVars.unit.down2,
  paddingBlockStart: styleVars.unit.down2,
  paddingInlineEnd: styleVars.unit.down1,
  paddingInlineStart: styleVars.unit.down1,
});

export const links = style({
  alignContent: "start",
  display: "grid",
  gridAutoFlow: "row",
  gridRowGap: styleVars.unit.down1,
  justifyItems: "end",
});

export const date = style({
  margin: 0,
});

export const time = style({
  margin: 0,
  paddingBlockStart: styleVars.unit.down2,
});

export const lineup = style({
  margin: 0,
  paddingBlockStart: styleVars.unit.down2,
});

export const location = style({
  margin: 0,
  paddingBlockStart: styleVars.unit.down2,
});

export const noShows = style([{ textAlign: "center" }, borders]);

export const noShowsText = style({
  paddingBlockEnd: styleVars.unit.down1,
  paddingBlockStart: styleVars.unit.down1,
});
