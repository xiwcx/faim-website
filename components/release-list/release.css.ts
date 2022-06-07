import { repeat } from "@mobily/ts-belt/dist/types/Array";
import { style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

const areaImage = "image";
const areaTitle = "title";

export const releaseContainer = style({
  display: "grid",
  backgroundColor: styleVars.color.white,
  padding: "0.5rem",
  borderRadius: styleVars.borderRadius.md,
});

export const releaseImage = style({
  borderRadius: styleVars.borderRadius.sm,
});

const areaYoutube = "youtube";
const areaBandcamp = "bandcamp";
const areaSpotify = "spotify";
const areaApple = "apple";

export const linkList = style({
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateAreas: `"${areaBandcamp} ${areaSpotify} ${areaYoutube} ${areaApple}"`,
  gridTemplateColumns: "repeat(4, 1fr)",
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

export const bandcamp = style({
  gridArea: areaBandcamp,
});

export const spotify = style({
  gridArea: areaSpotify,
});

export const youtube = style({
  gridArea: areaYoutube,
});

export const apple = style({
  gridArea: areaApple,
});
