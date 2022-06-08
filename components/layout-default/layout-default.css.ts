import { globalStyle } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";
import { fontBody } from "../typography/typography.css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("body", {
  backgroundColor: styleVars.color.navy,
  color: styleVars.color.white,
  ...fontBody,
  fontSize: "clamp(1rem, 0.9rem + 1vw, 2rem)",
});

globalStyle("img", {
  maxWidth: "100%",
});
