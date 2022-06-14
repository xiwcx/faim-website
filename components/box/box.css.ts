import { createVar, style } from "@vanilla-extract/css";
import { styleVars } from "../../utils/styles/index.css";

export const corner = {
  sm: "4px",
  md: "8px",
  lg: "16px",
} as const;

const cornerSize = createVar();

export const box = style({
  backgroundColor: styleVars.color.yellow,
  color: styleVars.color.navy,
  display: "inline-block",
  lineHeight: 0.7,
  textDecoration: "none",
  // https://css-generators.com/custom-corners/
  mask: `conic-gradient(from -135deg at top ${cornerSize} left ${cornerSize}, #000, #0000 1deg 179deg,#000 180deg) 0    0   /100% 100% no-repeat`,
});

export const sm = style({
  vars: { [cornerSize]: corner.sm },
});

export const md = style({
  vars: { [cornerSize]: corner.md },
});

export const lg = style({
  vars: { [cornerSize]: corner.lg },
});
