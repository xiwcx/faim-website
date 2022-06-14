import clsx from "clsx";
import React from "react";
import { D } from "@mobily/ts-belt";
import * as styles from "./box.css";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.ReactHTML;
  size?: keyof typeof styles.corner;
}

export const Box = ({
  as = "div",
  children,
  className,
  size = "sm",
}: BoxProps) =>
  React.createElement(
    as,
    {
      className: clsx([className, styles.box, styles[size]]),
    },
    children
  );
