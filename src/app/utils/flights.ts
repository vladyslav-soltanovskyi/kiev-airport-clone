import { RecievFlightInfo } from "types/flight";
import { Langs } from "./Intl";

export const getFilteredFlights = (flights: RecievFlightInfo[], search: string, lang: Langs) => {
  const filteredFlights = flights.filter((flight) => {
    const searchText = search.trim().toLowerCase();
    const isSameFlightNum = flight.flightNum.toLowerCase().includes(searchText);
    const isSameAirline = flight.airline[lang].name.toLowerCase().includes(searchText);
    const isSameCity = flight.city[lang].toLowerCase().includes(searchText);
    const isSearchEmpty = searchText === '';
    

    return isSameFlightNum || isSameAirline || isSameCity || isSearchEmpty;
  });

  return filteredFlights;
}