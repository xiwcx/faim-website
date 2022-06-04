import type { ReleaseFragment } from "../../generated/sdk";

interface ReleaseLinkProps {
  brand: "apple" | "youtube" | "spotify" | "bandcamp";
  href: string;
}

export const ReleaseLink = ({ brand, href }: ReleaseLinkProps) => {
  return (
    <li>
      <a href={href}>{brand}</a>
    </li>
  );
};
