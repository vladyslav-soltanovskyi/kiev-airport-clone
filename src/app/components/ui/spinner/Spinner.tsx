import React, { FC } from "react";
import { SpinnerCircle, SpinnerContainer } from "./styles";

const Spinner: FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
}

export default Spinner;