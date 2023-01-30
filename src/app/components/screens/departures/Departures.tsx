import React, { FC } from "react";
import { getDeparturesSelector, getIsFetchingSelector, getSearchTextSelector } from "store/flights/selectors";
import FlightsTable from "ui/flights-table/FlightsTable";
import NoFoundFlights from "ui/no-found-flights/NoFoundFlights";
import Spinner from "ui/spinner/Spinner";
import { getFilteredFlights } from "utils/flights";
import { useLang, useTypedSelector } from "hooks/index";

const Departures: FC = () => {
  const departures = useTypedSelector(getDeparturesSelector);
  const isFetching = useTypedSelector(getIsFetchingSelector);
  const searchText = useTypedSelector(getSearchTextSelector);
  const { lang } = useLang();
  const filteredDepartures = getFilteredFlights(departures, searchText, lang);

  if (isFetching) {
    return <Spinner />;
  }
  
  if (filteredDepartures.length === 0) {
    return <NoFoundFlights />;
  }
  
  return (
    <FlightsTable
      flights={filteredDepartures}
      typeFlights="departures"
    />
  );
}

export default Departures;