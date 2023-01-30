import React, { HTMLAttributes } from "react";
import {
  DateInputContainer,
  DateInputIconContainer,
  DateInputValue
} from "./styles";

type DateInputProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { value: string; };

const DateInput = (
  {
    value,
    onClick
  }: DateInputProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <DateInputContainer
      onClick={onClick}
      ref={ref}
    >
      <DateInputValue>
        {value}
      </DateInputValue>
      <DateInputIconContainer>
        <i className="fa-regular fa-calendar"></i>
      </DateInputIconContainer>
    </DateInputContainer>
  );
};

export default DateInput;