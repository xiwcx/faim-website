import { A, G } from "@mobily/ts-belt";
import { useGetEvents } from "../../utils/useGetShows";
import { Loader } from "../loader/loader";
import { Typography } from "../typography/typography";
import { ShowList } from "./show-list";
import * as styles from "./show-list.css";

export const Shows = () => {
  const { data, isLoading } = useGetEvents("faim");

  if (isLoading) return <Loader />;

  return (
    <>
      {G.isArray(data) && A.isNotEmpty(data) ? (
        <ShowList shows={data} />
      ) : (
        <div className={styles.noShows}>
          <Typography className={styles.noShowsText} style="h1">
            No shows at the moment
          </Typography>
        </div>
      )}
    </>
  );
};
