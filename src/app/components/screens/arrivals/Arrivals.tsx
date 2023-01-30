import { useTypedSelector } from "hooks/useTypedSelector";
import React, { FC } from "react";
import { getArrivalsSelector } from "store/flights/selectors";
import FlightsTable from "ui/flights-table/FlightsTable";
import NoFoundFlights from "ui/no-found-flights/NoFoundFlights";


const Arrivals: FC = () => {
  const arrivals = useTypedSelector(getArrivalsSelector);

  if (arrivals.length === 0) {
    return <NoFoundFlights />
  }

  return (
    <FlightsTable
      flights={arrivals}
      typeFlights="arrivals"
    />
  );
}

export default Arrivals;