import { useLang } from "hooks/useLang";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { RecievFlightInfo } from "types/flight";
import {
  AirlineContainer,
  AirlineField,
  AirlineLogo,
  AirlineName,
  TableCeil,
  TableCeilCenter,
  TableCeilLink,
  TableContainer,
  TableHeader,
  TableLink,
  TableRow,
  TermField
} from "./styles";

interface FlightsTableProps {
  flights: RecievFlightInfo[];
  typeFlights: 'arrivals' | 'departures'
}

const columns = [
  { key: "term" },
  { key: "time" },
  { key: "city" },
  { key: "status" },
  { key: "airline" },
  { key: "flight" },
];

const FlightsTable: FC<FlightsTableProps> = ({
  flights,
  typeFlights
}) => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const isLanded = typeFlights === 'arrivals';

  return (
    <TableContainer>
      <thead>
        <tr>
          {columns.map(({ key }) => (
            <TableHeader key={key}>{t(`table.${key}`)}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {flights.map(({ term, time, id, airline, flightNum, city, status }) => (
          <TableRow key={id}>
            <TableCeilCenter>
              <TermField term={term}>{term}</TermField>
            </TableCeilCenter>
            <TableCeil>{time}</TableCeil>
            <TableCeil>{city[lang]}</TableCeil>
            <TableCeil>{t(`table.${isLanded ? 'landed' : 'departed'}`)} {status}</TableCeil>
            <TableCeil>
              <AirlineContainer>
                <AirlineField>
                  <AirlineLogo src={airline[lang].logoName} alt="logo" />
                </AirlineField>
                <AirlineName>{airline[lang].name}</AirlineName>
              </AirlineContainer>
            </TableCeil>
            <TableCeil>{flightNum}</TableCeil>
            <TableCeilLink>
              <TableLink to={`/arrivals/${id}`}>{t('table.details')}</TableLink>
            </TableCeilLink>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
}

export default FlightsTable;
// landed
// departed