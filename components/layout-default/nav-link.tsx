import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "../typography/typography";
import * as styles from "./nav-link.css";

interface ReleaseLinkProps {
  text: string;
  href: string;
}

export const NavLink = ({ href, text }: ReleaseLinkProps) => (
  <Link href={href}>
    <a className={styles.navLink}>
      <Typography as="span" style="h2" color="white">
        {text}
      </Typography>
    </a>
  </Link>
);