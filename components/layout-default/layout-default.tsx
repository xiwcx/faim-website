import { G } from "@mobily/ts-belt";
import Head from "next/head";
import "./layout-default.css.ts";
import { NavLink } from "./nav-link";

interface LayoutDefaultProps {
  subtitle?: string;
  children: React.ReactNode;
}

function getTitle(subtitle?: string) {
  const title = "Faim";

  if (G.isString(subtitle)) return `${title} | ${subtitle}`;

  return title;
}

const LayoutDefault = ({ children, subtitle }: LayoutDefaultProps) => {
  const title = getTitle(subtitle);

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Faim</title>
      </Head>
      <header>
        <h1>Faim</h1>

        <nav>
          <NavLink href="/" text="releases" />
          <NavLink href="/links/" text="links" />
          <NavLink href="/store/" text="store" />
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default LayoutDefault;
