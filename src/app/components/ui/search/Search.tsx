import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import queryString from "query-string";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useSearchParams } from "react-router-dom";
import { getSearchTextSelector } from "store/flights/selectors";
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
  const searchText = useTypedSelector(getSearchTextSelector);
  const [search, setSearch] = useState(searchText);
  const { changeSearchText } = useActions();
  const [params, setParams] = useSearchParams();
  const searchParams = queryString.parse(params.toString());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeSearchText(search);
    setParams({
      ...searchParams,
      search
    });
  }

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <SearchContainer>
      <SearchTitle>{t('search.title')}</SearchTitle>
      <SearchFormContainer>
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
        <form onSubmit={handleSubmit}>
          <SearchInput
            value={search}
            onChange={handleChangeSearch}
            placeholder={t('search.placeholder') as string}
          />
          <SearchBtn type="submit">{t('search.search')}</SearchBtn>
        </form>
      </SearchFormContainer>
    </SearchContainer>
  );
}

export default Search;