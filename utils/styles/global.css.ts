import { style as vanillaStyle } from "@vanilla-extract/css";

export const style = {
  colorSwatchContainer: vanillaStyle({
    display: "flex",
  }),
  colorSwatch: vanillaStyle({
    display: "block",
    height: "5rem",
    width: "5rem",
  }),
};
