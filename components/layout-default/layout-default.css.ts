import { globalStyle } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";
import { fontBody } from "../typography/typography.css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("body", {
  backgroundColor: styleVars.color.navy,
  color: styleVars.color.white,
  padding: styleVars.unit.def,
  fontSize: "clamp(1rem, 0.9rem + 1vw, 2rem)",
  ...fontBody,

  "@media": {
    "screen and (min-width: 30em)": {
      padding: styleVars.unit.up1,
    },
    "screen and (min-width: 60em)": {
      padding: styleVars.unit.up2,
    },
  },
});

globalStyle("img, svg", {
  maxWidth: "100%",
});
