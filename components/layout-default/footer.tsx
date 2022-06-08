import { IconSafeInside } from "../icons/safe-inside";
// import { IconInstagram } from "../icons/safe-inside copy";
import * as styles from "./footer.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <a className={styles.labelLink} href="https://www.safeinsiderecords.com/">
      <IconSafeInside fill="white" />
    </a>
  </footer>
);
