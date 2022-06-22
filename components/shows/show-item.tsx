import { A, G, S } from "@mobily/ts-belt";
import { format, parseISO } from "date-fns";
import { Offer, Show } from "../../utils/useGetShows";
import { Box } from "../box/box";
import { Typography } from "../typography/typography";
import { styleVars } from "../../utils/styles/index.css";
import * as styles from "./show-list.css";

interface ShowItemProps {
  show: Show;
}

const linkPadding = `${styleVars.unit.down1} ${styleVars.unit.def}`;
const formatDate = (iso: string) => format(parseISO(iso), "MMM do, iiii");
const formatTime = (iso: string) => format(parseISO(iso), "K:mm aaa");
const getLineup = (bands: string[]) => {
  const bandsWithoutSelf = bands.filter(
    (band) => band.toLowerCase() !== "faim"
  );

  if (A.isNotEmpty(bandsWithoutSelf)) return `w/ ${bands.join(", ")}`;

  return "";
};
const getTicketsLinks = (offers: Offer[]) => {
  const ticketOffer = offers.find((offer) => offer.type === "Tickets");

  if (G.isObject(ticketOffer)) return ticketOffer.url;

  return "";
};

export const ShowItem = ({ show }: ShowItemProps) => {
  const lineup = getLineup(show.lineup);
  const ticketsLink = getTicketsLinks(show.offers);

  console.log(show);

  return (
    <li className={styles.item}>
      <div>
        <Typography className={styles.date}>
          {formatDate(show.starts_at)}
        </Typography>

        <Typography className={styles.time}>
          {show.title} @ {formatTime(show.starts_at)}
        </Typography>

        {S.isNotEmpty(lineup) && (
          <Typography className={styles.lineup}>{lineup}</Typography>
        )}

        <Typography className={styles.location}>
          {show.venue.location}
        </Typography>
      </div>

      <div className={styles.links}>
        <a href={show.url}>
          <Box className={styles.link} size="sm">
            RSVP
          </Box>
        </a>

        {S.isNotEmpty(ticketsLink) && (
          <a href={ticketsLink}>
            <Box className={styles.link} size="sm">
              Tickets
            </Box>
          </a>
        )}
      </div>
    </li>
  );
};
