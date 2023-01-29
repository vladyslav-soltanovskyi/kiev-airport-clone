import React, { forwardRef } from "react";

const DateInput = (
  {
    value,
    onClick
  }: React.HTMLProps<HTMLInputElement>
) => {
  return (
    <div
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default DateInput;