import React from "react";
import * as styles from "./typography.css";
import { styleVars } from "../../utils/styles/index.css";

type Font = "body" | "h1" | "h2" | "display";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.ReactHTML;
  style?: Font;
  color?: keyof typeof styleVars.color;
}

export const Typography = ({
  as = "p",
  color = "white",
  className = "",
  children,
  style = "body",
}: TypographyProps) =>
  React.createElement(
    as,
    {
      className: `${styles[style]} ${className}`,
      style: { color: styleVars.color[color] },
    },
    children
  );
