import { UsableLinkFragment } from "../../utils/types";

interface LinkProps {
  link: UsableLinkFragment;
}

export const Link = ({ link }: LinkProps) => {
  return (
    <li>
      <a href={link.href}>{link.label}</a>
    </li>
  );
};
