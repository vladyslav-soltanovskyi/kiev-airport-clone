import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
import {
  checkIsDatesEqual,
  formatDateQuery,
  formatDay,
  today,
  tomorrow,
  yesterday
} from "utils/dates";
import {
  DateItem,
  DateNum,
  DatesContainer,
  DateTitle
} from "./styles";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { getSelectedDateSelector } from "store/flights/selectors";

interface DatesProps {

}

const Dates: FC<DatesProps> = () => {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const queryParams = queryString.parse(params.toString());
  const { selectDate } = useActions();
  const date = useTypedSelector(getSelectedDateSelector);

  const changeDate = (date: Date) => {
    selectDate(date);
    setParams({
      ...queryParams,
      date: formatDateQuery(date)
    })
  }

  return (
    <DatesContainer>
      <DateItem
        onClick={() => changeDate(yesterday)}
        active={checkIsDatesEqual(date, yesterday)}
      >
        <DateNum>{formatDay(yesterday)}</DateNum>
        <DateTitle>{t('yesterday')}</DateTitle>
      </DateItem>
      <DateItem
        onClick={() => changeDate(today)}
        active={checkIsDatesEqual(date, today)}
      >
        <DateNum>{formatDay(today)}</DateNum>
        <DateTitle>{t('today')}</DateTitle>
      </DateItem>
      <DateItem
        onClick={() => changeDate(tomorrow)}
        active={checkIsDatesEqual(date, tomorrow)}
      >
        <DateNum>{formatDay(tomorrow)}</DateNum>
        <DateTitle>{t('tomorrow')}</DateTitle>
      </DateItem>
    </DatesContainer>
  );
}

export default Dates;