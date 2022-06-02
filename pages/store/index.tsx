import type { NextPage } from "next";
import LayoutDefault from "../../components/layout-default/layout-default";

const Store: NextPage = () => {
  return (
    <LayoutDefault>
      <ul>
        <li>
          <a href="https://faim.bandcamp.com/merch">Bandcamp</a>
        </li>
        <li>
          <a href="https://safeinsidestore.com/">Safe Inside</a>
        </li>
        <li>
          <a href="https://deathwishinc.com/collections/safe-inside">
            Deathwish
          </a>
        </li>
        <li>
          <a href="https://www.convulserecords.com/artist/faim">
            Convulse Records
          </a>
        </li>
      </ul>
    </LayoutDefault>
  );
};

export default Store;
