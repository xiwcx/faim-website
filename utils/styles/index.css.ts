import { createGlobalTheme } from "@vanilla-extract/css";

export const rawVars = {
  color: {
    navy: "#0f153d",
    green: "#046635",
    yellow: "#f8c54f",
    orange: "#ed8c22",
    red: "#d03427",
    pink: "#eaa09f",
  },
  font: {
    body: "arial",
  },
} as const;

export const styleVars = createGlobalTheme(":root", rawVars);
