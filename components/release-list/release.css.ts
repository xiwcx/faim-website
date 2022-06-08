import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

const areaImage = "image";
const areaText = "text";

export const release = style({
  display: "grid",
  gridTemplateAreas: `"${areaImage} ${areaText}"`,
});

export const image = style({
  gridArea: areaImage,
});

export const text = style({
  gridArea: areaText,
});

export const ul = style({
  display: "grid",
  gridGap: styleVars.unit.down1,
});
