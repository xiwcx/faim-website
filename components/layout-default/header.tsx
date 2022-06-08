import { NavLink } from "./nav-link";
import * as styles from "./header.css";
import * as navLinkStyles from "./nav-link.css";
import { Typography } from "../typography/typography";
import { IconInstagram } from "../icons/safe-instagram";
import Link from "next/link";

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.siteTitleLink}>
        <Typography as="h1" style="display">
          Faim
        </Typography>
      </a>
    </Link>

    <nav>
      <NavLink href="/" text="releases" />
      <NavLink href="/about" text="about" />
      {/* <NavLink href="/links/" text="links" /> */}
      <NavLink href="/store" text="store" />
      <a
        className={navLinkStyles.navLinkIcon}
        href="https://www.instagram.com/faimhc/"
      >
        <IconInstagram fill="white" />
      </a>
    </nav>
  </header>
);
