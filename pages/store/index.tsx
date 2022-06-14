import type { NextPage } from "next";
import LayoutDefault from "../../components/layout-default/layout-default";
import { StoreList } from "../../components/store-list/store-list";

const Store: NextPage = () => {
  return (
    <LayoutDefault>
      <StoreList />
    </LayoutDefault>
  );
};

export default Store;
