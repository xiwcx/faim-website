import type { NextPage } from "next";
import LayoutDefault from "../../components/layout-default/layout-default";
import { Shows } from "../../components/shows/shows";

const ShowsPage: NextPage = () => (
  <LayoutDefault>
    <Shows />
  </LayoutDefault>
);

export default ShowsPage;
