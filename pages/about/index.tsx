import type { NextPage } from "next";
import { About } from "../../components/about/about";
import LayoutDefault from "../../components/layout-default/layout-default";

const Store: NextPage = () => {
  return (
    <LayoutDefault>
      <About />
    </LayoutDefault>
  );
};

export default Store;
