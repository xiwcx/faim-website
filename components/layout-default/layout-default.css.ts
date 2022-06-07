import { globalStyle } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";
import { fontBody } from "../typography/typography.css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("body", {
  backgroundColor: styleVars.color.yellow,
  color: styleVars.color.navy,
  ...fontBody,
});

globalStyle("img", {
  maxWidth: "100%",
});
