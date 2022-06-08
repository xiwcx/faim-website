import type { NextPage } from "next";
import LayoutDefault from "../../components/layout-default/layout-default";

const Store: NextPage = () => {
  return (
    <LayoutDefault>
      <article>
        <p>A hardcore band from Denver, Colorado.</p>

        <ul>
          <li>Chris — Guitar</li>
          <li>Chris — Guitar</li>
          <li>Kat — Vocals</li>
          <li>Nick — Drums</li>
          <li>Welch — Bass</li>
        </ul>
      </article>
    </LayoutDefault>
  );
};

export default Store;
