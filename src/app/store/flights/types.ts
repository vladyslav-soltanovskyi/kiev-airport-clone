import { RecievFlightInfo } from "types/flight";

export interface IFlightsState {
  arrivals: RecievFlightInfo[];
  departures: RecievFlightInfo[];
  isFetching: boolean;
  searchText: string;
  selectedDate: Date;
}