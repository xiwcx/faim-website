import type { ReleaseFragment } from "../../generated/sdk";

interface ReleaseLinkProps {
  brand: "youtube" | "spotify" | "bandcamp";
  href: string;
}

export const ReleaseLink = ({ brand, href }: ReleaseLinkProps) => {
  return (
    <li>
      <a href={href}>{brand}</a>
    </li>
  );
};
