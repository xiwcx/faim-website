import { NavLink } from "./nav-link";
import * as styles from "./header.css";
import * as navLinkStyles from "./nav-link.css";
import { Typography } from "../typography/typography";
import { IconInstagram } from "../icons/instagram";
import Link from "next/link";
import clsx from "clsx";
import { useMeasure } from "@react-hookz/web/"; // esm

export const Header = () => {
  const [measurements, ref] = useMeasure<HTMLElement>();
  const width = measurements?.width || 0;
  const isMedium = width > 600;
  const headerClassnames = clsx(styles.header, {
    [styles.headerMedium]: isMedium,
  });

  return (
    <header className={headerClassnames} ref={ref}>
      <Link href="/">
        <a className={styles.siteTitleLink}>
          <Typography as="h1" style="display">
            Faim
          </Typography>
        </a>
      </Link>

      <nav>
        <NavLink href="/" text="releases" />
        <NavLink href="/links" text="links" />
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
};
