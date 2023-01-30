import React, { FC, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import DateInput from "ui/date-input/DateInput";
import { DatePickerContainer } from "./styles";
import {
  useLang,
  useActions,
  useTypedSelector
} from "hooks/index";
import { formatDateQuery } from "utils/dates";
import { getSelectedDateSelector } from "store/flights/selectors";
import en from 'date-fns/locale/en-US';
import uk from 'date-fns/locale/uk';

import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";

registerLocale('en', en);
registerLocale('uk', uk);

const DatePicker: FC = () => {
  const selectedDate = useTypedSelector(getSelectedDateSelector);
  const { lang } = useLang();
  const { selectDate, fetchFlights } = useActions();
  const [params, setParams] = useSearchParams();
  const queryParams = queryString.parse(params.toString());

  const changeDate = (date: Date) => {
    selectDate(date);
    setParams({
      ...queryParams,
      date: formatDateQuery(date)
    });
    fetchFlights(date);
  }


  return (
    <DatePickerContainer>
      <ReactDatePicker
        selected={selectedDate}
        onChange={changeDate}
        dateFormat="dd/MM"
        locale={lang}
        customInput={
          React.createElement(React.forwardRef(DateInput))
        }
      />
    </DatePickerContainer>
  );
}

export default DatePicker;