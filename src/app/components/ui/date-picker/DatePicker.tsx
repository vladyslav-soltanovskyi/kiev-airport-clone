import React, { FC } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import DateInput from "ui/date-input/DateInput";
import { DatePickerContainer } from "./styles";
import { useLang } from "hooks/useLang";
import en from 'date-fns/locale/en-US';
import uk from 'date-fns/locale/uk';

import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  
}

registerLocale('en', en);
registerLocale('uk', uk);

const DatePicker: FC<DatePickerProps> = () => {
  const { lang } = useLang();
  
  return (
    <DatePickerContainer>
      <ReactDatePicker
        selected={new Date()}
        onChange={(date: Date) => console.log(date)}
        dateFormat="dd/MM"
        locale={lang}
        customInput={
          React.createElement(React.forwardRef(DateInput))
        }
        includeDateIntervals={[
          { start: new Date(), end: new Date(2023, 1, 10) },
        ]}
      />
    </DatePickerContainer>
  );
}

export default DatePicker;