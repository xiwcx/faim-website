import useSWR, { Fetcher } from "swr";

export interface Offer {
  type: "Tickets" | string;
  url: "string";
  available: "available" | string;
}

export interface Show {
  offers: Offer[];
  venue: {
    country: string;
    city: string;
    latitude: string;
    name: string;
    location: string;
    region: string;
    longitude: string;
  };
  starts_at: string;
  artist: {
    thumb_url: string;
    mbid: string;
    facebook_page_url: string;
    image_url: string;
    tracker_count: number;
    tracking: unknown[];
    upcoming_event_count: number;
    url: string;
    support_url: string;
    name: string;
    options: { display_listen_unit: boolean };
    links: string;
    artist_optin_show_phone_number: boolean;
    id: string;
  };
  festival_datetime_display_rule: string;
  description: string;
  lineup: string[];
  festival_start_date: string;
  bandsintown_plus: boolean;
  title: string;
  artist_id: string;
  url: string;
  datetime_display_rule: string;
  datetime: string;
  on_sale_datetime: string;
  id: string;
  ends_at: string;
  festival_end_date: string;
}

const eventsFetcher: Fetcher<Show[], string> = (artistId) =>
  fetch(
    `https://rest.bandsintown.com/artists/${artistId}/events/?app_id=a6b9e09fdda2d9b00a0c01ce8429a430`
  ).then((res) => res.json());

export const useGetEvents = (artistId: string) => {
  const { data, error } = useSWR(artistId, eventsFetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
