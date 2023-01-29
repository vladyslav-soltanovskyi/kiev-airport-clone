import React, { FC } from "react";
import { DateItem, DateNum, DatesContainer, DateTitle } from "./styles";

interface DatesProps {

}

const Dates: FC<DatesProps> = () => {

  return (
    <DatesContainer>
      <DateItem>
        <DateNum>27/01</DateNum>
        <DateTitle>Вчора</DateTitle>
      </DateItem>
      <DateItem>
        <DateNum>28/01</DateNum>
        <DateTitle>Сьогодні</DateTitle>
      </DateItem>
      <DateItem>
        <DateNum>29/01</DateNum>
        <DateTitle>Завтра</DateTitle>
      </DateItem>
    </DatesContainer>
  );
}

export default Dates;