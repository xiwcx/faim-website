import { IconConvulse } from "../icons/convulse";
import { IconDeathwish } from "../icons/deathwish";
import { IconSafeInside } from "../icons/safe-inside";
import { StoreItem } from "./store-item";
import * as styles from "./store-list.css";

export interface Store {
  label: string;
  icon: React.ReactElement;
  href: string;
}

const stores: Store[] = [
  {
    label: "Safe Inside",
    href: "https://safeinsidestore.com",
    icon: <IconSafeInside />,
  },
  {
    label: "Convulse Records",
    href: "https://www.convulserecords.com/artist/faim",
    icon: <IconConvulse />,
  },
  {
    label: "Deathwish",
    href: "https://deathwishinc.com/collections/safe-inside",
    icon: <IconDeathwish />,
  },
];

export const StoreList = () => {
  return (
    <ul className={styles.ul}>
      {stores.map((store, i) => (
        <StoreItem key={store.label} index={stores.length - i} store={store} />
      ))}
    </ul>
  );
};
