import React from "react";
import { useTranslation } from "react-i18next";
import { NoFoundFlightsContainer } from "./styles";

const NoFoundFlights: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NoFoundFlightsContainer>
      <span>{t('no-found-flights')}</span>
    </NoFoundFlightsContainer>
  );
}

export default NoFoundFlights;