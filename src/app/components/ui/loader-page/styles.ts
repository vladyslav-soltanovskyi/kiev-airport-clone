import styled, { keyframes } from "styled-components";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderCircle = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spinning} 1.2s linear infinite;
  }
`;