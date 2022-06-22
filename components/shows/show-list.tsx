import type { Show } from "../../utils/useGetShows";
import { IconBandsintown } from "../icons/bandsintown";
import { ShowItem } from "./show-item";
import * as styles from "./show-list.css";

export interface ShowListProps {
  shows: Show[];
}

export const ShowList = ({ shows }: ShowListProps) => {
  return (
    <div>
      <ul className={styles.ul}>
        {shows.map((show) => (
          <ShowItem key={show.id} show={show} />
        ))}
      </ul>

      <a href="https://www.bandsintown.com/a/2144548-faim?came_from=210&utm_medium=web&utm_source=artist_event_page&utm_campaign=artist">
        <IconBandsintown />
      </a>
    </div>
  );
};
