import { G } from "@mobily/ts-belt";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import "./layout-default.css.ts";
import * as styles from "./main.css";

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
    <div>
      <Head>
        <title>Faim | Denver Hardcore</title>
        <style>@import url(https://use.typekit.net/qyg2uaf.css);</style>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default LayoutDefault;
