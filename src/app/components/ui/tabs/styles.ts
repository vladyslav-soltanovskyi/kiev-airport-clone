import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const TabItem = styled.div<{ active?: boolean; }>`
  cursor: pointer;
  flex: 1 1 auto;
  text-transform: uppercase;
  padding: 0;
  border: 0;
  position: relative;
  font-weight: 600;
  transition: .3s ease-in-out;
  outline: none;
  overflow: hidden;
  font-size: 24px;
  line-height: 60px;
  background: ${({ theme, active }) => !active ? theme.colors.primaryLight : theme.colors.white};
  color: ${({ theme, active }) => !active ? theme.colors.white : theme.colors.primaryLight};
  z-index: ${({ active }) => active ? '10' : ''};
  border-radius: ${({ active }) => active ? '60px 60px 0 0 !important' : ''};

  :hover {
    background: ${({ theme, active }) => !active ? theme.colors.primary : ''};
  }
`;

export const TabItemLeft = styled(TabItem)`
  text-left: right;
  padding-right: 100px;
  border-radius: 60px 0 0 0;
  text-align: right;
  margin-right: -60px;
`;

export const TabItemRight = styled(TabItem)`
  padding-left: 100px;
  border-radius: 0 60px 0 0;
`;

export const Airplane = styled.svg`
  transform: translateY(2px);
  margin-right: 15px;
`;