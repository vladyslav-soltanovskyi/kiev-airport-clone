import styled from "styled-components";

export const SwitcherLangConatainer = styled.div`
  position: relative;
`;

export const LangItem = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const FlagImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LangListContainer = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  z-index: 10;
`;

export const LangList = styled.div``;

export const LangListItem = styled(LangItem)`
  margin-top: 5px;
`;