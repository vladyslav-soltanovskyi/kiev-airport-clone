import React, { FC } from "react";
import {
  SearchBtn,
  SearchContainer,
  SearchFormContainer,
  SearchIcon,
  SearchInput,
  SearchTitle
} from "./styles";

const Search: FC = () => {
  return (
    <SearchContainer>
      <SearchTitle>ПОШУК РЕЙСУ</SearchTitle>
      <SearchFormContainer>
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
        <form>
          <SearchInput placeholder="Номер рейсу або місто" />
          <SearchBtn type="submit">Знайти</SearchBtn>
        </form>
      </SearchFormContainer>
    </SearchContainer>
  );
}

export default Search;