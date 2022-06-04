import { UsableLinkFragment } from "../../utils/types";
import { Link } from "./link";

interface LinkListProps {
  links: UsableLinkFragment[];
}

export const LinkList = ({ links }: LinkListProps) => {
  return (
    <ul>
      {links.map((link) => (
        <Link key={link.label} link={link} />
      ))}
    </ul>
  );
};
