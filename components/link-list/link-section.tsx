import { G } from "@mobily/ts-belt";
import { UsableLinkFragment } from "../../utils/types";
import { Box } from "../box/box";
import { Typography } from "../typography/typography";
import * as styles from "./link-list.css";

interface LinkSectionProps {
  links: UsableLinkFragment[];
  title?: string;
}

export const LinkSection = ({ links, title }: LinkSectionProps) => {
  return (
    <li>
      {G.isString(title) && (
        <Typography className={styles.title} style="h2">
          {title}
        </Typography>
      )}

      <ul className={styles.linkCategoryList}>
        {links.map((link) => (
          <li key={link.label}>
            <a className={styles.link} href={link.href}>
              <Box className={styles.linkSpan} as="span" size="md">
                {link.label}
              </Box>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
