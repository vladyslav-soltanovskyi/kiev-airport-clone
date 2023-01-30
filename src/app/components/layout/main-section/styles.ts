import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 40px;
`;

export const MainContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding-top: 25px;
  overflow: hidden;
`;

export const CalendarDate = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlightsContainer = styled.div`
  overflow: auto;
`;