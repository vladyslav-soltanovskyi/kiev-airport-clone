import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;
  margin-top: 40px;

  ${({ theme }) => theme.maxMedia.md} {
    padding: 0;
  }
`;

export const MainContent = styled.div`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: 25px;
  overflow: hidden;
  transition: .3s ease-in-out;
`;

export const CalendarDate = styled.div`
  display: flex;
`;

export const FlightsContainer = styled.div`
  overflow: auto;
`;