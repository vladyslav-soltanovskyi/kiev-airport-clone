import styled from "styled-components";

export const TogglerThemeContainer = styled.div`
  width: 42px;
  height: 42px;
  cursor: pointer;
`

export const TogglerThemeIcon = styled.i<{ active?: boolean; }>`
  font-size: 42px;
  color: ${({ theme, active }) => active ? '#ffbc09' : theme.colors.white};
`