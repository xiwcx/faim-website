import { G } from "@mobily/ts-belt";
import Head from "next/head";
import "./layout-default.css.ts";

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
      </header>
      <main>{children}</main>
    </div>
  );
};

export default LayoutDefault;
