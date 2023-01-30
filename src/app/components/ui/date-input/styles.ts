import styled from "styled-components";

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%
`;

export const DateInputValue = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};  
  font-weight: 700;
`

export const DateInputIconContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;