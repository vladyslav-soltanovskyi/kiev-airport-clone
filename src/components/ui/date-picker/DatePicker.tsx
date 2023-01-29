import React, { FC } from "react";
import ReactDatePicker from "react-datepicker";
import DateInput from "ui/date-input/DateInput";

import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {

}

const DatePicker: FC<DatePickerProps> = () => {
  return (
    <ReactDatePicker
      selected={new Date()}
      onChange={(date: Date) => console.log(date)}
      customInput={React.createElement(DateInput)}
      includeDateIntervals={[
        { start: new Date(), end: new Date(2023, 1, 10) },
      ]}
    />
  );
}

export default DatePicker;