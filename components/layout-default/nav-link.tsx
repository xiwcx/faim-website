import Link from "next/link";

interface ReleaseLinkProps {
  text: string;
  href: string;
}

export const NavLink = ({ href, text }: ReleaseLinkProps) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};
