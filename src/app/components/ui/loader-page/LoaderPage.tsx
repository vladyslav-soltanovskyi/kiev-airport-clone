import React, { FC } from "react";
import { LoaderCircle, LoaderPageContainer } from "./styles";

const LoaderPage: FC = () => {
  return (
    <LoaderPageContainer>
      <LoaderCircle />
    </LoaderPageContainer>
  );
}

export default LoaderPage;