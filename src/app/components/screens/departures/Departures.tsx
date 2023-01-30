import { useTypedSelector } from "hooks/useTypedSelector";
import React, { FC } from "react";
import { getDeparturesSelector } from "store/flights/selectors";
import FlightsTable from "ui/flights-table/FlightsTable";
import NoFoundFlights from "ui/no-found-flights/NoFoundFlights";

const Departures: FC = () => {
  const departures = useTypedSelector(getDeparturesSelector);
  
  if (departures.length === 0) {
    return <NoFoundFlights />
  }

  return (
    <FlightsTable
      flights={departures}
      typeFlights="departures"
    />
  );
}

export default Departures;