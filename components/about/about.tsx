import clsx from "clsx";
import React from "react";
import { Box } from "../box/box";
import * as styles from "./about.css";

export const About = () => (
  <Box className={styles.about} as="article" size="lg">
    <p>A hardcore band from Denver, Colorado.</p>

    <ul>
      <li>Chris — Guitar</li>
      <li>Chris — Guitar</li>
      <li>Kat — Vocals</li>
      <li>Nick — Drums</li>
      <li>Welch — Bass</li>
    </ul>
  </Box>
);
