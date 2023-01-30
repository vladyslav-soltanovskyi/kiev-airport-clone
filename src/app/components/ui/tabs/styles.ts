import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
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
  display: flex;
  align-items: center;
  background: ${({ theme, active }) => !active ? theme.colors.primaryLight : theme.colors.backgroundLight};
  color: ${({ theme, active }) => !active ? theme.colors.white : theme.colors.primaryLight};
  z-index: ${({ active }) => active ? '10' : ''};
  border-radius: ${({ active }) => active ? '60px 60px 0 0 !important' : ''};

  :hover {
    background: ${({ theme, active }) => !active ? theme.colors.primary : ''};
  }

  ${({ theme }) => theme.maxMedia.md} {
    line-height: 50px;
    font-size: 14px;
  }
`;

export const TabItemLeft = styled(TabItem)`
  padding-right: 100px;
  border-radius: 60px 0 0 0;
  justify-content: flex-end;
  margin-right: -60px;
  
  ${({ theme }) => theme.maxMedia.md} {
    padding-right: 0;
    justify-content: flex-start;
    margin-right: -30px;
    border-radius: ${({ active }) => active ? '0 30px 0 0 !important' : '0'};
  }
`;

export const TabItemRight = styled(TabItem)`
  padding-left: 100px;
  border-radius: 0 60px 0 0;
  justify-content: flex-start;

  ${({ theme }) => theme.maxMedia.md} {
    padding-left: 0;
    flex-direction: row-reverse;
    border-radius: ${({ active }) => active ? '30px 0 0 0 !important' : '0'};
  }
`;

export const Airplane = styled.svg`
  transform: translateY(2px);
  margin: 0 15px;
  
  ${({ theme }) => theme.maxMedia.md} {
    line-height: 50px;
    font-size: 14px;
  }
`;