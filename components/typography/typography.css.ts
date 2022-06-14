import { style } from "@vanilla-extract/css";

// https://fonts.adobe.com/fonts/octin#recommendations-section
// https://fonts.adobe.com/fonts/halcom

export const fontBody = {
  fontFamily: "unit-rounded, sans-serif",
  fontWeight: 300,
  fontStyle: "normal",
} as const;

export const display = style({
  fontFamily: "octin-college, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "4em",
  lineHeight: 1,
  margin: 0,
});

export const h1 = style({
  fontFamily: "octin-college, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "2em",
  lineHeight: 1.2,
  margin: 0,
});

export const h2 = style({
  fontFamily: "octin-college, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  lineHeight: 1.2,
  margin: 0,
});

export const body = style(fontBody);
