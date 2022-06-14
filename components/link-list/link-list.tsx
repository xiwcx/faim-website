import { A, G, pipe } from "@mobily/ts-belt";
import { UsableLinkFragment } from "../../utils/types";
import { LinkSection } from "./link-section";
import * as styles from "./link-list.css";

type LinkCategory = "misc" | "friend" | "cause" | "project";

interface LinkListProps {
  links: UsableLinkFragment[];
}

type CategorizedLinks = Partial<Record<LinkCategory, UsableLinkFragment[]>>;

export const LinkList = ({ links }: LinkListProps) => {
  const pinnedLinks = links.filter((l) => l.isPinned);
  const categorizedLinks: CategorizedLinks = pipe(
    links,
    A.filter((l) => !l.isPinned),
    A.groupBy((l) => l.category ?? "misc")
  );

  return (
    <ul className={styles.linkList}>
      <LinkSection
        links={
          G.isArray(categorizedLinks.misc)
            ? [...pinnedLinks, ...categorizedLinks.misc]
            : pinnedLinks
        }
      />

      {G.isArray(categorizedLinks.cause) && (
        <LinkSection links={categorizedLinks.cause} title="Support" />
      )}

      {G.isArray(categorizedLinks.friend) && (
        <LinkSection links={categorizedLinks.friend} title="Friends" />
      )}

      {G.isArray(categorizedLinks.project) && (
        <LinkSection links={categorizedLinks.project} title="Projects" />
      )}
    </ul>
  );
};
