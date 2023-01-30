import React, { FC } from 'react';
import { ReactNode } from 'react';
import DatePicker from 'ui/date-picker/DatePicker';
import Dates from 'ui/dates/Dates';
import Tabs from 'ui/tabs/Tabs';
import { CalendarDate, FlightsContainer, MainContent, MainWrapper } from './styles';

interface MainSectionProps {
  children: ReactNode;
}

const MainSection: FC<MainSectionProps> = ({ children }) => {
  return (
    <MainWrapper>
      <Tabs />
      <MainContent>
        <CalendarDate>
          <DatePicker />
          <Dates />
        </CalendarDate>
        <FlightsContainer>
          {children}
        </FlightsContainer>
      </MainContent>
    </MainWrapper>
  );
}

export default MainSection;