import React, { FC } from "react";
import { useTranslation } from 'react-i18next';
import {
  SearchBtn,
  SearchContainer,
  SearchFormContainer,
  SearchIcon,
  SearchInput,
  SearchTitle
} from "./styles";

const Search: FC = () => {
  const { t } = useTranslation();

  return (
    <SearchContainer>
      <SearchTitle>{t('search.title')}</SearchTitle>
      <SearchFormContainer>
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
        <form>
          <SearchInput placeholder={t('search.placeholder') as string} />
          <SearchBtn type="submit">{t('search.search')}</SearchBtn>
        </form>
      </SearchFormContainer>
    </SearchContainer>
  );
}

export default Search;