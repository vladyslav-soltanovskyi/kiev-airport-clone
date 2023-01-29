import styled from "styled-components";

export const DatesContainer = styled.div`
  margin-left: 30px;
  display: flex;
  width: 300px;
  position: relative;
`;

export const DateItem = styled.div<{ active?: boolean; }>`
  cursor: pointer;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLightSecondary};
  padding-bottom: ${({ theme }) => theme.spaces.xs};
  border-bottom: ${({ theme }) => theme.borders.dayContainer};
  transition: .3s ease-out;
  position: relative;
  flex-basis: 33.33333%;
  max-width: 33.33333%;

  ${({ active, theme }) => active && `
    color: ${theme.colors.primary};
    border-bottom: ${theme.borders.dayContainerActive};
  `}
`;

export const DateNum = styled.div`
  font-size: 12px;
  margin-bottom: 5px
`;

export const DateTitle = styled.div`
  font-weight: 700;
  text-transform: uppercase;
`;