import styled, { keyframes } from "styled-components";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  padding: 0 50px;
`;

export const SpinnerCircle = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;

  :after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: ${spinning} 1.2s linear infinite;
  }
`;