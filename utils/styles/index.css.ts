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
    sm: ".25rem",
    md: ".5rem",
    lg: "1rem",
  },
} as const;

export const styleVars = createGlobalTheme(":root", rawVars);
