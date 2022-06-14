import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "../typography/typography";
import * as styles from "./nav-link.css";

interface ReleaseLinkProps {
  text: string;
  href: string;
}

export const NavLink = ({ href, text }: ReleaseLinkProps) => {
  const { pathname } = useRouter();
  const isActive = href === pathname;

  return (
    <Link href={href}>
      <a className={clsx(styles.navLink, { [styles.navLinkActive]: isActive })}>
        <Typography as="span" style="h2" color="white">
          {text}
        </Typography>
      </a>
    </Link>
  );
};
