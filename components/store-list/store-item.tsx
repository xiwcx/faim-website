import type { Store } from "./store-list";
import { Box } from "../box/box";
import { useEffect, useRef } from "react";
import { setElementVars } from "@vanilla-extract/dynamic";
import * as styles from "./store-list.css";

interface StoreItemProps {
  index: number;
  store: Store;
}

export const StoreItem = ({
  index,
  store: { href, icon, label },
}: StoreItemProps) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (ref.current) {
      setElementVars(ref.current, {
        [styles.gridColumnStartVar]: String(index),
      });
    }
  }, [ref.current]);

  return (
    <li className={styles.li} ref={ref}>
      <a className={styles.link} href={href}>
        <Box className={styles.box} as="span" size="md">
          {icon} <span>{label}</span>
        </Box>
      </a>
    </li>
  );
};
