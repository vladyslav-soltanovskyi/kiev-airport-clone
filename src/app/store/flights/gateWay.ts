import { DtoFlights } from "types/flight";

export const getFlights = async (day: string) => {
  const res = await fetch(`https://api.iev.aero/api/flights/${day}`);

  return (await res.json()) as DtoFlights;
}