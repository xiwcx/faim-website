import { createGlobalTheme } from "@vanilla-extract/css";

export const rawVars = {
  color: {
    navy: "#0f153d",
    yellow: "#f8c54f",
    maroon: "#8A292F",
    white: "#fff",
    green: "#046635",
    orange: "#ed8c22",
    red: "#d03427",
    pink: "#eaa09f",
  },
  font: {
    body: "arial",
  },
  borderRadius: {
    sm: ".25em",
    md: ".5em",
    lg: "1em",
  },
  unit: {
    down1: ".5em",
    def: "1em",
    up1: "2em",
    up2: "4em",
    up3: "8em",
  },
} as const;

export const styleVars = createGlobalTheme(":root", rawVars);
