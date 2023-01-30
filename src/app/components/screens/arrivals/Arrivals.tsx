import React, { FC } from "react";
import { getArrivalsSelector, getIsFetchingSelector, getSearchTextSelector } from "store/flights/selectors";
import { useTypedSelector, useLang } from "hooks/index";
import FlightsTable from "ui/flights-table/FlightsTable";
import NoFoundFlights from "ui/no-found-flights/NoFoundFlights";
import Spinner from "ui/spinner/Spinner";
import { getFilteredFlights } from "utils/flights";


const Arrivals: FC = () => {
  const arrivals = useTypedSelector(getArrivalsSelector);
  const isFetching = useTypedSelector(getIsFetchingSelector);
  const searchText = useTypedSelector(getSearchTextSelector);
  const { lang } = useLang();
  const filteredArrivals = getFilteredFlights(arrivals, searchText, lang);
  
  if (isFetching) {
    return <Spinner />;
  }

  if (filteredArrivals.length === 0) {
    return <NoFoundFlights />;
  }

  return (
    <FlightsTable
      flights={filteredArrivals}
      typeFlights="arrivals"
    />
  );
}

export default Arrivals;