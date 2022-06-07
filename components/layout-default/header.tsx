import { NavLink } from "./nav-link";
import * as styles from "./header.css";
import { Typography } from "../typography/typography";
import Link from "next/link";

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.siteTitleLink}>
        <Typography as="h1" color="white" style="display">
          Faim
        </Typography>
      </a>
    </Link>

    <nav>
      <NavLink href="/" text="releases" />
      <NavLink href="/about/" text="about" />
      {/* <NavLink href="/links/" text="links" /> */}
      <NavLink href="/store/" text="store" />
    </nav>
  </header>
);
