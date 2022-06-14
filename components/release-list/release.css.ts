import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

const areaImage = "image";
const areaText = "text";

export const release = style({
  display: "grid",
  gridTemplateAreas: `"${areaImage} ${areaText}"`,
  gridTemplateColumns: "2fr 3fr",
});

export const image = style({
  gridArea: areaImage,
});

export const text = style({
  gridArea: areaText,
});

export const title = style({
  marginBlockEnd: styleVars.unit.down1,
  paddingInlineStart: styleVars.unit.def,
  display: "inline-block",
  borderBlockEndWidth: styleVars.unit.down3,
  borderBlockEndStyle: "solid",
  borderBlockEndColor: styleVars.color.maroon,
  transform: "translateX(-.5em)",
});

export const ul = style({
  display: "grid",
  gridGap: styleVars.unit.down1,
  padding: 0,
  margin: 0,
  transform: `translateX(calc(${styleVars.unit.def} * -1 ))`,
});
