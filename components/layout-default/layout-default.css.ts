import { globalStyle } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("body", {
  backgroundColor: styleVars.color.navy,
  color: styleVars.color.yellow,
});

globalStyle("img", {
  maxWidth: "100%",
});
