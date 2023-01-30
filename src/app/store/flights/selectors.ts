import { TypeRootState } from "store/store";

export const getDeparturesSelector = (state: TypeRootState) => state.flights.departures;
export const getArrivalsSelector = (state: TypeRootState) => state.flights.arrivals;
export const getIsFetchingSelector = (state: TypeRootState) => state.flights.isFetching;
export const getSelectedDateSelector = (state: TypeRootState) => state.flights.selectedDate;
export const getSearchTextSelector = (state: TypeRootState) => state.flights.searchText;